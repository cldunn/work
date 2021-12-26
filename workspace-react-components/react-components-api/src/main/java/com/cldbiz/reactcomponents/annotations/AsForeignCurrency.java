package com.cldbiz.reactcomponents.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.util.Locale;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface AsForeignCurrency {
	String loc() default "";
	String sym() default "";
	String grp() default "";
	String sep() default ".";
	int pre() default 2;
}
