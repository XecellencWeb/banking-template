;/*FB_PKG_DELIM*/

__d("WAWebCameraIcon",["WAWebSvgComponentBase","react","stylex"],(function(a,b,c,d,e,f,g){var h,i,j=h||c("react"),k="camera";function a(a){var b=a.iconXstyle,e=a.height,f=a.width,g=a.viewBox;a=babelHelpers.objectWithoutPropertiesLoose(a,["iconXstyle","height","width","viewBox"]);var h;if(g){var l=g.x;l=l===void 0?0:l;var m=g.y;m=m===void 0?0:m;var n=g.width;n=n===void 0?0:n;g=g.height;g=g===void 0?0:g;h=[l,m,n,g].join(" ")}l=24;m=24;(e!=null||f!=null)&&(l=e,m=f);return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan,babelHelpers["extends"]({name:k},a,{children:j.jsxs("svg",{viewBox:(n=h)!=null?n:"0 0 24 24",height:l,width:m,preserveAspectRatio:"xMidYMid meet",className:(i||(i=c("stylex")))(b),version:"1.1",x:"0px",y:"0px",enableBackground:"new 0 0 24 24",children:[j.jsx("title",{children:k}),j.jsx("path",{fill:"currentColor",d:"M21.317,4.381H10.971L9.078,2.45C8.832,2.199,8.342,1.993,7.989,1.993H4.905 c-0.352,0-0.837,0.211-1.078,0.468L1.201,5.272C0.96,5.529,0.763,6.028,0.763,6.38v1.878c0,0.003-0.002,0.007-0.002,0.01v11.189 c0,1.061,0.86,1.921,1.921,1.921h18.634c1.061,0,1.921-0.86,1.921-1.921V6.302C23.238,5.241,22.378,4.381,21.317,4.381z  M12.076,18.51c-3.08,0-5.577-2.497-5.577-5.577s2.497-5.577,5.577-5.577s5.577,2.497,5.577,5.577 C17.654,16.013,15.157,18.51,12.076,18.51z M12.076,9.004c-2.17,0-3.929,1.759-3.929,3.929s1.759,3.929,3.929,3.929 s3.929-1.759,3.929-3.929C16.004,10.763,14.245,9.004,12.076,9.004z"})]})}))}a.displayName=a.name+" [from "+f.id+"]";g.CameraIcon=a}),98);
__d("WAWebCopyLinkButton.react",["fbt","WAWebCopyIcon","WAWebCopyToClipboard","WAWebDrawerButton.react","WAWebToast.react","WAWebToastManager","react"],(function(a,b,c,d,e,f,g,h){var i,j=i||c("react"),k={icon:{color:"xw63xux",$$css:!0}};function l(a,b){a=document.getElementById(a);a&&d("WAWebCopyToClipboard").copyElementContentsToClipboard(a)?d("WAWebToastManager").ToastManager.open(j.jsx(d("WAWebToast.react").Toast,{msg:h._("__JHASH__84GNAOxxNnu__JHASH__")})):d("WAWebToastManager").ToastManager.open(j.jsx(d("WAWebToast.react").Toast,{msg:h._("__JHASH__b8i57yvPeuv__JHASH__")}));b!=null&&b()}function a(a){var b=a.divider,c=a.elementId,e=a.onClick;return!document.queryCommandSupported("copy")?null:j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple,{testid:void 0,icon:j.jsx(d("WAWebCopyIcon").CopyIcon,{xstyle:k.icon}),onClick:function(){return l(c,e)},divider:b,children:h._("__JHASH__CIn59molrrN__JHASH__")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("WAWebLoggerDebugInfo",["WAWebConnModel","WAWebCrashlogConstants","WAWebUA","WAWebUserPrefsGeneral","WAWebUserPrefsMeUser","WAWebWam","WAWebWamGlobals","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){var h=new Map([["appIsBetaRelease","is-beta"],["appVersion","version"],["browserVersion","browser-version"],["deviceName","os"],["mcc","phone-mcc"],["mnc","phone-mnc"],["webc_bucket","exp-bucket"],["webcPhoneAppVersion","phone-app-version"],["webcPhoneCharging","is-phone-charging"],["webcPhoneDeviceManufacturer","phone-manufacturer"],["webcPhoneDeviceModel","phone-model"],["webcPhoneOsVersion","phone-os-version"],["webcPhonePlatform","phone-os"],["webcWebPlatform","platform"],["webcProtoVersion","protocol-version"],["deviceID","device-id"],["webcWebArch","device-arch"],["webcWebDeviceManufacturer","device-manufacturer"],["webcWebDeviceModel","device-model"],["webcWebOsReleaseNumber","device-release"],["deviceVersion","os-version"],["userAgent","user-agent"],["mdEnabled","md-enabled"],["hasMdCompanion","has-md-companion"],["entityId","entity id"]]);function a(a){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){void d("WAWebWam").Wam.initialize();var b=babelHelpers["extends"]({},d("WAWebWamGlobals").Global.all,{webcWebPlatform:d("WAWebCrashlogConstants").CLB_PLATFORM,webcPhonePlatform:d("WAWebConnModel").Conn.platform,webcProtoVersion:String(d("WAWebConnModel").Conn.protoVersion)}),c=d("WAWebUserPrefsMeUser").getMe();c&&(b.deviceID=c.toString());c={};for(var e in b){var f=b[e];f!=null&&(c[e]=f)}c.debugIsExternalBeta=(yield d("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb());if(a){f=a.supportTag;e=a.addUserAgentDetails;b=a.convertFields;a=a.entityId;f!=null&&(c.context=f);a!=null&&(c.entityId=a);e===!0&&(c.userAgent=d("WAWebUA").UA.parser.getUA());if(b===!0){f=j(c);return f}}return c});return i.apply(this,arguments)}function j(a){var b={};for(a of Object.entries(a)){var c,d=a[0],e=a[1];b[(c=h.get(d))!=null?c:d]=e}return b}g.getDebugInfo=a}),98);
__d("WAWebSendLinkButton.react",["fbt","WAWebDrawerButton.react","WAWebForwardIcon","react"],(function(a,b,c,d,e,f,g,h){var i,j=i||c("react"),k={icon:{color:"xw63xux",$$css:!0}};function a(a){var b=a.divider;a=a.onClick;return j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple,{testid:void 0,icon:j.jsx(d("WAWebForwardIcon").ForwardIcon,{xstyle:k.icon}),onClick:a,divider:b,children:h._("__JHASH__Bc6tNi26J9H__JHASH__")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);