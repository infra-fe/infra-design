(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{3434:function(e,t){e.exports={content:["article",["h2","Design Goals"],["p","Standardize data expression to ensure intuitive, accurate and consistent understanding of data."],["h2","Types"],["h3","Numerical"],["p","The numerical value is used to indicate the measurement size, it can be used alone or with digital symbols."],["table",["thead",["tr",["th","Symbol Format"],["th","How and When to Use"],["th","Example"]]],["tbody",["tr",["td","Decimal separator"],["td","Use commas to separate groups of thousands to help users read."],["td","123,123,220"]],["tr",["td","Unit of measurement"],["td","Put units of measurement in lowercase."],["td","123,220kg"]],["tr",["td","Percentage"],["td","To present proportionality, etc."],["td","12.32%"]],["tr",["td","Forward slash"],["td","To\xA0express progress with\xA0fractions."],["td","12/30"]]]],["p",["br"]],["p",["img",{class:"preview-img good",align:"right",alt:"Do",src:"https://gw.alipayobjects.com/zos/antfincdn/8QPU0UKlAA/ebba34c8-c7c0-4dc7-a3a6-e486b118b5fd.png"}]],["p",["img",{class:"preview-img bad",align:"right",alt:"Don't",src:"https://gw.alipayobjects.com/zos/antfincdn/jvsJ7TbQM%26/8cb7388a-7224-48cd-9672-a1cd1882b060.png"}]],["p",["strong","Position"],': To let users read the data intuitively and accurately, it is necessary to make it clear and concise. In a table with numerical values, "right-aligned" method is usually adopted, which not only facilitates the user to quickly read, but also allows the user to compare the longitudinal data.'],["h3","Amount"],["p",["strong","Amount Format"],': The standard format is "currency symbol + number". For example, "CNY1,123.00". ',["strong","Currency Symbol"],": There are two types: abbreviations letters and characters. You can check symbols for different currencies from ",["a",{title:null,href:"https://www.iban.com/currency-codes"},"CURRENCY SYMBOLS"],"."],["table",["thead",["tr",["th","Currency Symbol"],["th","How and When to Use"],["th","Example"]]],["tbody",["tr",["td","Character"],["td","Take RMB as example, its character symbol is ",["code","\xA5"],", placed in front of the amount."],["td","\xA5123.00"]],["tr",["td","Letter"],["td","Take RMB as example, it is recommended to use ",["code","CNY"],", which is the international currency code."],["td","CNY123.00"]]]],["p",'Large amount: If an amount is large, "M/Mill." (abbreviation of million) and "B/Bill." (abbreviation of billion) can be used.'],["h3","Date/Time"],["h4","Absolute Time"],["p","Absolute time is for users with high time accuracy requirements, it emphasizes the precise time point of information release. Through absolute time, users can retrieve information and review the past content."],["p",["strong","Date Format:"]],["p","We suggest the following formats:"],["table",["thead",["tr",["th","Format"],["th","How and when to use"],["th","Examples"]]],["tbody",["tr",["td","Year, month, day"],["td","In China ",["code","YYYY-MM-DD"]," format is used by default."],["td","2019-12-08"]],["tr",["td","Terms"],["td","When a special term containing a date expressed with numbers\uFF0Cdisplay a ",["code","."]," between the month and the day, and quotation marks should be added before and after the term."],["td","6.1 children's day"]],["tr",["td","Date range"],["td","Put ",["code","~"]," or ",["code","-"]," between the date or time range (space is required before and after)."],["td","2018-12-08 ~ 2019-12-07"]]]],["p",["strong","Time Format:"]],["table",["thead",["tr",["th","Time System"],["th","How and when to use"],["th","Examples"]]],["tbody",["tr",["td","24-hour clock"],["td","The format\xA0is ",["code","HH:MM:SS"],". Omit hours or second if not apply.\xA0Use the 24-hour clock by default."],["td","14:08:00"]],["tr",["td","12-hour clock"],["td","Use the format ",["code","H:MM:SS AM/PM"]," (or am/pm).\xA0"],["td","2:08:00 PM ~ 2:08:00 AM"]]]],["p",["strong","Standard format"],': When put a date and a time together, show a space between them, e.g. "2019-12-08 06:00:00".'],["h4","Relative Time"],["p","To the users, the accuracy of time is not so important as the immediacy of the information. In the console platform, relative time is generally used for message and notification. And users tend to pay more attention to the unit of time, instead of working out the specific time point of publication."],["table",["thead",["tr",["th","Time"],["th","Display form"]]],["tbody",["tr",["td","Less than 1 minute"],["td","just now"]],["tr",["td","Less than 1 hour"],["td","N minutes ago"]],["tr",["td","Within 24 hours"],["td","N hours ago"]],["tr",["td","Longer than 24 hours"],["td",["code","MM-DD HH:MM"],', e.g. "12-08 08:00"']],["tr",["td","Longer than one year"],["td",["code","YYYY-MM-DD HH:MM"],'\uFF0Ce.g. "2019-12-08 08:00"']]]],["h3","Data Redaction"],["p","Data redaction refers to representing truncated data to protect sensitive privacy information. The rules presented here are general guidelines, which can be adjusted according to business scenarios with strong data security."],["h4","Complete Redaction"],["p",["img",{class:"preview-img good",align:"right",alt:"Do",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*NJs8QYejQyEAAAAAAAAAAABkARQnAQ"}],`
`,["img",{class:"preview-img bad",align:"right",alt:"Don't",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*JvI4T5SXvIYAAAAAAAAAAABkARQnAQ"}]],["p","Generally used for particularly important and sensitive information such as amount and time. All the numbers need to be hidden. And the data is replaced by ",["code","***"],"."],["h4","Partial Redaction"],["p","Generally used for situations that require partial information for identification. In such cases, some part of the information is truncated, but the numerical digits of the numbers need to retain. The truncated data is replaced by ",["code","*"],"."],["table",["thead",["tr",["th","Data Type"],["th","How and When to Use"],["th","Example"]]],["tbody",["tr",["td","Name"],["td","Two-character name: display the first character, followed by a ",["code","*"],"."],["td","\u4EF2","*"]],["tr",["td"],["td","Names with three characters or more: display the first character and the last character, replace the middle character(s) with ",["code","*"],"."],["td","\u4EF2","*","\u59AE ",["br"]," \u4EF2","*","*","\u59AE"]],["tr",["td","Mobile number"],["td","Keep the first three and the last four digits of the mobile number."],["td","186","*","*","*","*","1402"]],["tr",["td","ID number"],["td","The Chinese citizenship number consists of six address codes, eight birthdate codes, three sequential codes and one check code.",["br"],["br"],"Redaction rules are classified into high, medium and low levels: ",["br"],["strong","High"],": Show\xA0the first and last digits, and replace the others with ",["code","*"],".",["br"],["strong","Medium"],":\xA0Show the first three and the last three. Replace the others with ",["code","*"],".",["br"],["strong","Low"],": Show the first six and the last four. Replace the others with ",["code","*"],"."],["td","6","*","*","*","*","*","*","*","*","*","*","*","*","*","2",["br"],"213","*","*","*","*","*","*","*","*","*","*","*","203",["br"],"212912","*","*","*","*","*","*","2233"]],["tr",["td","Address"],["td","Keep the provinces, cities and district information, followed by several ",["code","*"],"."],["td","\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02 \u897F\u6E56\u533A ","*",["strong","*","*","*","*"]]],["tr",["td","Email"],["td","Keep the host name of the mail and the first three characters, indicate\xA0the rest information with ",["code","*"],"."],["td","123","*",["strong","*","*","*","*","*","*"],"@163.com"]],["tr",["td","Bank card number"],["td","The bank card number consists of the issuing bank identification code (ranging from 6 to 12 digits), personal account identification (ranging from 6 to 12 digits), and a check code. ",["br"],["br"],"Redaction rules are classified into high, medium and low levels: ",["br"],["strong","High"],": Display the last four digits, and\xA0replace the others with ",["code","*"],".",["br"],["strong","Medium"],": Display the first six and the last four digits,\xA0replace the others with ",["code","*"],".\xA0",["br"],["strong","Low"],": Display the first six and the last six digits, display the remaining digits with ",["code","*"],"."],["td","*","*","*","*","*","*","*","*","1208",["br"],"620121","*","*","1208",["br"],"620121","*","*","*","*","111208"]]]],["h3","Data Status"],["h4","Empty State"],["p",["img",{class:"preview-img good",align:"right",alt:"Do",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*o0duS6P8WUEAAAAAAAAAAABkARQnAQ"}],`
`,["img",{class:"preview-img bad",align:"right",alt:"Don't",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ssPWRaVkIy8AAAAAAAAAAABkARQnAQ"}]],["p","Display ",["code","--"]," to express no-data status."],["h4","Loading"],["p",["img",{class:"preview-img",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*E6pGTJYEh-gAAAAAAAAAAABkARQnAQ"}]],["p","Use Skeleton screen when loading data."],["h2","Reference"],["ul",["li",["p",["a",{title:null,href:"https://baike.baidu.com/item/%E8%B4%A7%E5%B8%81%E4%BB%A3%E7%A0%81/7467182?fr=aladdin"},"Currency Symbol List"]]],["li",["p",["a",{title:null,href:"https://zh.wikipedia.org/wiki/%E5%90%84%E5%9C%B0%E6%97%A5%E6%9C%9F%E5%92%8C%E6%97%B6%E9%97%B4%E8%A1%A8%E7%A4%BA%E6%B3%95"},"Time Data Formats for Different Countries"]]],["li",["p",["a",{title:null,href:"http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091154536.pdf"},"Digital Specification for Publications"]]]]],meta:{category:"Design Patterns",type:"Global Rules",order:5,title:"Data format",filename:"docs/spec/data-format.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Design-Goals",title:"Design Goals"},"Design Goals"]],["li",["a",{className:"bisheng-toc-h2",href:"#Types",title:"Types"},"Types"]],["li",["a",{className:"bisheng-toc-h2",href:"#Reference",title:"Reference"},"Reference"]]]}}}]);
