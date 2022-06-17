(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{3417:function(t,e){t.exports={content:["article",["h2","Design Principal"],["ul",["li",["p","Guide users to achieve the desired actions."]],["li",["p","Prevent user to make mistakes."]]],["h2","Types"],["h3","Common Button Types"],["div",["img",{alt:"buttons",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*wsXrT7yQH2MAAAAAAAAAAABkARQnAQ"}]],["h4","\u2460 Default Button"],["p","Default buttons are used for non-primary actions. If not sure which button type to choose from, the default button is always a safe bet."],["h4","\u2461 Primary Button"],["p",'Emphasize on "complete" or "recommend" action. There is at most one primary button per a button group.'],["h4","\u2462 Text Button"],["p","Low emphasis and light-weight button type, such as actions in a table."],["h4","\u2463 Icon Button"],["p","Icon provides a visual clue."],["ul",["li",["p","It could fit more buttons in a small space."]],["li",["p","Buttons with icon only need to provide Tooltip to indicate the meaning of the button."]]],["h4","\u2464 Text Button with Icon"],["p","Provides supplementary meaning to the button."],["h3","Emphasis"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*guusTZ6ZPxkAAAAAAAAAAABkARQnAQ"}]],["p","Common button types could be used to showcase to different ",["strong","emphasis"],"."],["h3","Do & Don't"],["p",["img",{class:"preview-img no-padding bad",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*di8jS5EWYSIAAAAAAAAAAABkARQnAQ",alt:"Don't",description:"Don't put more than 1 primary button in the same group."}],`
`,["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3WUkT5pD1SUAAAAAAAAAAABkARQnAQ",alt:"Do",description:"1. Emphasiz on the primary action. <br/>2. If there is no primary action, then default buttons is the safest choice."}]],["p",["img",{class:"preview-img no-padding bad",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zBtTRq2xbTYAAAAAAAAAAABkARQnAQ",alt:"Don't",description:"Put 2 icons in the same button."}],`
`,["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*EpwSTpaGPBgAAAAAAAAAAABkARQnAQ",alt:"Do",description:"1. Should place the buttons in the order of importance. <br/>2. The less important actions should be place on right or at bottom."}]],["h3","Special Button Types"],["h4","Dashed Button"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*gPmNQ6_YCcoAAAAAAAAAAABkARQnAQ"}]],["p","Guide users to add content in an area."],["h4","Danger Button"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*OvNaQJrmqVMAAAAAAAAAAABkARQnAQ"}]],["p",["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ujcXTqJ_IwwAAAAAAAAAAABkARQnAQ",alt:"Do",description:"If user's intention is to delete, use danger button to warn this action has risks."}]],["p",["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*o7EySrBPX9oAAAAAAAAAAABkARQnAQ",alt:"Do",description:"When system does not recommend the deletion action, we could set 'Cancel' as the primary action."}]],["p","Warns users that there are risks involved in the action."],["h4","Ghost Button"],["p","Used in the dark or colored background."],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*-wORTrNJ6YUAAAAAAAAAAABkARQnAQ"}]],["h4","Call to Action"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*32zdRqTjDhYAAAAAAAAAAABkARQnAQ"}]],["p",'Usually appeared alone and intend to used as a command. For example, it is used in the landing page or welcome banner. It could be as wide as its parent container. It is recommend to have just 1 "Call to Action" button in 1 screen.'],["h2","Placement"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*B8D0RJnirLkAAAAAAAAAAABkARQnAQ"}]],["p",`Place buttons in the users' reading pattern for the ease of discovery, such as the "F-Shaped Reading Pattern" and "Z-Shaped Reading Pattern".`],["h3","How to Decide Button Placement?"],["h4","Page/Card/Section presents a subject, where it could be broken into 3 areas:"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*iVZpRpdN_2AAAAAAAAAAAABkARQnAQ"}]],["ul",["li",["p","Header: subject's heading, summary and navigation"]],["li",["p","Body: detailed content"]],["li",["p","Footer: supplementary information or toolbar"]]],["p","Place buttons in different areas could have different meanings."],["h3","When to Put Buttons in the Footer?"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*KGGWQLCBfm0AAAAAAAAAAABkARQnAQ"}]],["ul",["li",["p","Body section has collapsed or hidden content, such as it could not show the entire content in one screen;"]],["li",["p",'Body section has complex content. For example, it has multiple subgroups and each subgroup has its own actions. Now it is needed to separate "Complete" action from body section to avoid confusion.']]],["p","In short, footer's purpose is to have a separation from body."],["h2","Ordering"],["h3","Button Ordering"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*NcPDQI3IX8YAAAAAAAAAAABkARQnAQ"}]],["p","Recommend to start from the reading flow, collapsed content should always be on the right."],["p",["strong","How to Decide Button Ordering"]],["ul",["li",["p","Conversation Flow: place buttons in the order similar to a conversation between computers and users. ",["strong","Ask users the needed actions or your desired actions, then present the risks involved."]]],["li",["p","Navigation Flow: for example, if a button represents going back, should be placed on the left implying it is going to the previous step."]]],["h3","Button Group"],["p",["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*tK-AQaE5h1YAAAAAAAAAAABkARQnAQ",alt:"Do"}]],["p",["img",{class:"preview-img no-padding bad",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*_gU7ToHiZz4AAAAAAAAAAABkARQnAQ",alt:"Don't",description:"When button group has no space in between, it is easy to confuse it with Toggle Button."}]],["p","When multiple buttons form a group, align buttons in one line with spaces in between."],["h3","Grouping Buttons"],["p","When there are too many buttons on the screen, we could group relevant buttons together and use similar design for that group. If one of the buttons is primary action, we could still use emphasis."],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*x7YsTafH5osAAAAAAAAAAABkARQnAQ"}]],["p",["strong","Collapse buttons in the order of importance"]],["p",["br"]],["p",["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Qn-mQKxaQ5kAAAAAAAAAAABkARQnAQ",alt:"Do"}],`
`,["img",{class:"preview-img no-padding bad",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3bUZRbPiVBEAAAAAAAAAAABkARQnAQ",alt:"Don't",description:"If buttons are in the same group, no need to add dividers between them."}]],["p",["strong","Flat display of all the buttons"],": could separate different groups using space; or use divider to group similar buttons."],["h2","Label"],["p",["img",{class:"preview-img no-padding good",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*33KsR66zTY8AAAAAAAAAAABkARQnAQ",alt:"Do"}]],["p",["img",{class:"preview-img no-padding bad",align:"right",src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*238RTb4kaPwAAAAAAAAAAABkARQnAQ",alt:"Don't",description:"Should use verb"}]],["p","Labels should clearly indicate to users what would happen when buttons got clicked."],["ul",["li",["p","Should use verb (except dropdown buttons)"]],["li",["p","Should be relevant to the context and be concise."]]],["p",'Infra Design use "OK / Cancel" as default label, but you could still use below methods to customize the label text:'],["ul",["li",["p","Describe the action result."],["blockquote",["p","Publish, Login, Register."]]],["li",["p","If primary action means negative, stress the consequences."],["blockquote",["p","Are you sure to delete it? Delete / Cancel"]]]]],meta:{category:"Design Patterns",type:"Global Rules",order:6,title:"Button",filename:"docs/spec/buttons.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Design-Principal",title:"Design Principal"},"Design Principal"]],["li",["a",{className:"bisheng-toc-h2",href:"#Types",title:"Types"},"Types"]],["li",["a",{className:"bisheng-toc-h2",href:"#Placement",title:"Placement"},"Placement"]],["li",["a",{className:"bisheng-toc-h2",href:"#Ordering",title:"Ordering"},"Ordering"]],["li",["a",{className:"bisheng-toc-h2",href:"#Label",title:"Label"},"Label"]]]}}}]);
