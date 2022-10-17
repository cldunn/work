package com.cldbiz.security.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cldbiz.security.domain.AppCode;
import com.cldbiz.security.redis.cache.CacheAppCodeHash;
import com.cldbiz.security.redis.cache.CacheUserSecurityValue;
import com.cldbiz.security.repository.AppCodeRepository;
import com.cldbiz.security.util.LabelValueBean;

@Service
public class AppCodeService {
	@Autowired
	private CacheAppCodeHash cacheAppCodeHash;
	
	@Autowired
	private AppCodeRepository appCodeRepository;

	public Map<String, List<LabelValueBean>> getLvbs(String... appGroups) {
		Map<String, List<LabelValueBean>> lvbMap = new HashMap<String, List<LabelValueBean>>();
		Arrays.asList(appGroups).forEach((appGroup) -> {
			List<AppCode> appCodes = cacheAppCodeHash.getGroup(appGroup);
			if (appCodes == null) {
				appCodes = appCodeRepository.appCodes(appGroup);
				cacheAppCodeHash.put(appGroup, appCodes);
			}
			
			List<LabelValueBean> lvbs = appCodes.stream().map(appCode -> {
				return new LabelValueBean(appCode.getLabel(), appCode.getAppCodeKey().getValue());
			}).collect(Collectors.toList());
			lvbs.add(0, new LabelValueBean("", null));

			lvbMap.put(appGroup, lvbs);
		});
		
		return lvbMap;
	}
}
