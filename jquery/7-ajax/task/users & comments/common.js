var Common = function () {
    /// <summary>Constructor function of the Common class.</summary>
    /// <since>1.0.0</since>
    /// <returns type="Common" />

    var abortObjects = [];
    var javaScriptInfoLoggingEnabled = false;
    var javaScriptTraceLoggingEnabled = false;

    return {

        /// <summary>Initializes the aspect.</summary>
        /// <since>1.0.0</since>
        init: function () {

            
            Common.logInfo("Common.init...");
            
            //we do not need to define in cache false  all ajax call so..
           jQuery.ajaxSetup({ cache: false });
           
          
        },

        /// <summary>Converts a json object to a string.</summary>
        /// <param name="jsonObject" type="json">The json object.</param>
        /// <since>1.0.0</since>
        /// <returns type="string" />
        jsonToString: function (jsonObject) {

            if (jsonObject === undefined) {
                return "";
            }

            return JSON.stringify(jsonObject);
        },

        /// <summary>Converts a json string to a json object.</summary>
        /// <param name="jsonString" type="string">The json string.</param>
        /// <since>1.0.0</since>
        /// <returns type="json" />
        stringToJson: function (jsonString) {

            Common.logInfo("stringToJson...");

            if (jsonString === undefined || jsonString.length === 0) {
                return undefined;
            }

            // return JSON.parse(jsonString);
            return eval('(' + jsonString + ')');
        },

        /// <summary>Get Current Date Time.</summary>
        /// <since>1.0.0</since>
        /// <param name="DateTime" />
        getCurrentDateTime: function () {
            var today = new Date();
            var month = today.getMonth() + 1;
            var dateTime = today.getFullYear() + '-' + month + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            return dateTime;
        },

        /// <summary>Logs some info data if JavaScript info logging is enabled.</summary>
        /// <since>1.0.0</since>
        /// <param name="data" />
        logInfo: function (data) {

	        if (javaScriptInfoLoggingEnabled) {
                if (window.console) {
                    console.log(data);
                }
            }
        },

        /// <summary>Logs some trace data if JavaScript trace logging is enabled.</summary>
        /// <since>1.0.0</since>
        /// <param name="data" />
        logTrace: function (data) {
	  if (javaScriptInfoLoggingEnabled) {
                if (window.console) {
                    console.log(data);
                }
            }
        },

        /// <summary>Logs some data, always.</summary>
        /// <since>1.0.0</since>
        /// <param name="data" />
        logForce: function (data) {
            if (window.console) {
                console.log(data);
            }
        },

        /// <summary>Logs some error data, always.</summary>
        /// <since>1.0.0</since>
        /// <param name="data" />
        logError: function (data) {


            if (window.console) {
                console.error(data);
            }
        },

        /// <summary>Encode html text or code.</summary>
        /// <since>1.0.0</since>
        /// <param name="value" />
        htmlEncode: function (value) {

            if (value === undefined || value.length === 0) {
                return;
            }
            return (escape(value));
        },

        /// <summary>Decode html text or code.</summary>
        /// <since>1.0.0</since>
        /// <param name="value" />
        htmlDecode: function (value) {

            if (value === undefined || value.length === 0) {
                return;
            }
            return (unescape(value));
        },
        
        /// <summary>Format time display.</summary>
        /// <since>1.0.0</since>
        /// <param name="time" />
        formatTime: function (time) {
            
            var TIME12HOURS_PATTERN = /^(0[0-9]|1[0-2]):[0-5][0-9](\s)(am|pm)$/;
            var m = time.match(TIME12HOURS_PATTERN);
            if (m) {
                return true;
            } else {
                return false;
            }
        },

        /// <summary>Remove space from text.</summary>
        /// <since>1.0.0</since>
        /// <param name="str" />
        trim: function (str) {

            if (str === undefined || str.length === 0) {
                return;
            }
            if (typeof (str) != "string")
                Common.logInfo('only string parameter supported!');
            return str.replace(/\s/g, "");
        },
        
        /// <summary>
        /// Validate email address field of th e post job before submitting a form. 
        /// Make sure that user has entered correct email address.   
        /// </summary>
        /// <param name="parent" type="string"></param>           
        /// <returns type="bool" />     
        /// <since>1.0.0</since>       
        validateEmail: function (email) 
        {
              Common.logInfo("Common.validateEmail...");      
                      
              var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
              return expr.test(email);	   
		 
	   },
	 
	    /// <summary>
        /// Validate contact person name for job submit. 
        /// Make sure that user has entered correct contact person name.  Also allow german umlaut.
        /// </summary>
        /// <param name="parent" type="string"></param>           
        /// <returns type="bool" />     
        /// <since>1.0.0</since>       
        validateName: function (name) 
        {
              Common.logInfo("Common.validateName...");   
                         
              var expr = /[A-Za-z \-_.\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/;                         
              return expr.test(name);	   
		 
	 },
	 
	    /// <summary>
        /// Validate phone address field of the post resume before submitting a form. 
        /// Make sure that user has entered correct phone number.   
        /// </summary>
        /// <param name="parent" type="string"></param>           
        /// <returns type="bool" />     
        /// <since>1.0.0</since>       
        validatePhone: function (phone) 
        {
              Common.logInfo("Common.validatePhone...");      
                      
              var expr = /[0-9-()+]{3,20}/;
              return expr.test(phone);	   
	 },
	 
	    /// <summary>
        /// Validate website url or any url.
        /// Make sure that user has entered correct valid website or url address.   
        /// </summary>
        /// <param name="parent" type="string"></param>           
        /// <returns type="bool" />     
        /// <since>1.0.0</since>       
        isURL: function (str) 
        {
              Common.logInfo("Common.isURL...");      
                      
              var urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
     	      var url = new RegExp(urlRegex, 'i');
     	      return str.length < 2083 && url.test(str);   
		 
	 },
	 
	    /// <summary>
        /// Check string contains special characters or not.       
        /// </summary>
        /// <param name="parent" type="string"></param>           
        /// <returns type="bool" />     
        /// <since>1.0.0</since>       
        isContainSpecialCharacters: function (str) 
        {
              Common.logInfo("Common.isContainSpecialCharacters...");                
               
              var pattern = /\@/g;          
              if(str.match(pattern))
              { 
                return true;
              } 
              return false;
		 
	 }, 
	              
	    /// <summary>
        /// Check string contains space or not.       
        /// </summary>
        /// <param name="parent" type="string"></param>           
        /// <returns type="bool" />     
        /// <since>1.0.0</since>       
        isContainSpace: function (str) 
        {
              Common.logInfo("Common.isContainSpace...");              
                         
               var pattern = /\s/g;
              if(str.match(pattern))
              { 
                return true;
              } 
              return false;
		 
	 },
	
        
    }
};
Common = Common();
