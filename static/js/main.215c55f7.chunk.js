(this["webpackJsonpticket-tracker"]=this["webpackJsonpticket-tracker"]||[]).push([[0],[,,function(e,t,i){e.exports={ticket:"TicketItem_ticket__1B0kB","pop-in":"TicketItem_pop-in__22j7o",popin:"TicketItem_popin__29-LZ","ticket-solved":"TicketItem_ticket-solved__Cdram","ticket-container":"TicketItem_ticket-container__1Po38",names:"TicketItem_names__1k61t",description:"TicketItem_description__254wl",separator:"TicketItem_separator__1ZTvr","button-red":"TicketItem_button-red__11YRT","button-green":"TicketItem_button-green__1YoPJ",solved:"TicketItem_solved__1zBUJ","confirm-delete":"TicketItem_confirm-delete__xQXux","button-container":"TicketItem_button-container__7t215","ticket-buttons":"TicketItem_ticket-buttons__GgVgN","crop-title":"TicketItem_crop-title__1Uft7","crop-name":"TicketItem_crop-name__1I9ms","crop-description":"TicketItem_crop-description__3YSEe"}},,function(e,t,i){e.exports={"form-container":"TicketForm_form-container__l5HT5",form:"TicketForm_form__1--XP","button-red":"TicketForm_button-red__3Jfbo","button-green":"TicketForm_button-green__ieFaX",names:"TicketForm_names__3sPHb","button-container":"TicketForm_button-container__3oa8s",error:"TicketForm_error__EUBce","error-msg":"TicketForm_error-msg__6LMva"}},,,,,function(e,t,i){e.exports={header:"Header_header__hSxoU",logo:"Header_logo__3Wmrv",content:"Header_content__1YQwf"}},function(e,t,i){e.exports={backdrop:"Modal_backdrop__gJEkL","modal-overlay":"Modal_modal-overlay__2PB21",description:"Modal_description__3dJ_m"}},,,function(e,t,i){e.exports={"ticket-list":"TicketList_ticket-list__3y5h3",msg:"TicketList_msg__2mYwF"}},function(e,t,i){e.exports={button:"Button_button__1VNG8"}},function(e,t,i){e.exports={container:"Container_container__20jF9"}},function(e,t,i){e.exports={card:"Card_card__29IKR"}},,,,,,,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var r=i(1),c=i.n(r),n=i(6),o=i.n(n),s=i(3),a=i(0),l=Object(r.createContext)(),d=function(e){var t=JSON.parse(localStorage.getItem("stored-tickets")),i=Object(r.useState)(t||[{id:"default1",isSolved:!1,title:"Welcome",description:'New tickets/bug reports can be created by clicking "Add Ticket".\n                    \n                    Status of a ticket can be changed from "Open" to "Solved" by clicking the status label on ticket."\n\n                    Tickets are stored in local storage and can be removed by clicking "X" button on ticket.',reporter:"John Doe",assignee:"Anyone",date:"12.10.2021",priority:"Low",priorityColor:"#0cca98"},{id:"default2",isSolved:!1,title:"Clicking ticket opens it in modal",description:"To see full information of a ticket you can click it to open it in modal!",reporter:"Jane Doe",assignee:"Anyone",date:"12.10.2021",priority:"Medium",priorityColor:"#dd893b"},{id:"default3",isSolved:!1,title:"Lorem ipsum dolor sit amet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit diam. Sed nec lectus consequat nibh sagittis maximus id id nisl. Cras sodales ornare nisi mollis ullamcorper. Duis dapibus cursus tempor.",reporter:"John",assignee:"Jane",date:"2.10.2021",priority:"low",priorityColor:"#0cca98"},{id:"default4",isSolved:!1,title:"Lorem ipsum dolor sit amet, consectetur adipiscing.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit diam. \n                    \n                    Sed nec lectus consequat nibh sagittis maximus id id nisl. Cras sodales ornare nisi mollis ullamcorper. Duis dapibus cursus tempor. \n                    \n                    Suspendisse ac ante ut ex rhoncus hendrerit in non arcu. Nulla placerat magna id urna egestas egestas. Ut bibendum ipsum justo, eu congue purus imperdiet sollicitudin.",reporter:"Lorem Ipsum",assignee:"Jane Doe",date:"29.9.2021",priority:"low",priorityColor:"#0cca98"}]),c=Object(s.a)(i,2),n=c[0],o=c[1];return Object(a.jsx)(l.Provider,{value:[n,o],children:e.children})},j=i(14),u=i.n(j),p=function(e){var t="".concat(u.a.button," ").concat(e.className?e.className:"");return Object(a.jsx)("button",{className:t,type:e.type,onClick:e.onClick,children:e.children})},m=i(9),b=i.n(m),h=function(e){return Object(a.jsx)("header",{className:b.a.header,children:Object(a.jsxs)("div",{className:b.a.content,children:[Object(a.jsx)("h1",{className:b.a.logo,children:"Bug Tracker"}),Object(a.jsx)(p,{onClick:function(t){t.preventDefault(),e.onToggle()},children:"+ Add Ticket"})]})})},O=i(8),x=i(12),_=i(15),g=i.n(_),k=function(e){var t="".concat(g.a.container," ").concat(e.className?e.className:"");return Object(a.jsx)("div",{className:t,children:e.children})},f=i(4),v=i.n(f),y=function(e){var t=Object(r.useContext)(l),i=Object(s.a)(t,2),c=i[0],n=i[1],o=Object(r.useState)({title:"",description:"",reporter:"",assignee:"",date:"",priority:"Low"}),d=Object(s.a)(o,2),j=d[0],u=d[1],m=Object(r.useState)({isError:!1,title:"",description:"",reporter:"",assignee:""}),b=Object(s.a)(m,2),h=b[0],_=b[1],g=function(){e.onClose()},f=function(e,t){u((function(i){return Object(x.a)(Object(x.a)({},i),{},Object(O.a)({},e,t.target.value))}))},y=function(){var e=new Date,t=[e.getDate(),e.getMonth(),e.getFullYear()],i=t[1],r=t[2];return"".concat(t[0],".").concat(i+1,".").concat(r)},N=function(){var e=j.priority;return"Low"===e?"#0cca98":"Medium"===e?"#dd893b":"#dd4242"},C=function(){var e=c,t={id:Date.now().toString(36)+Math.random().toString(36).substr(2),isSolved:!1,title:j.title,description:j.description,reporter:j.reporter,assignee:j.assignee,date:y(),priority:j.priority,priorityColor:N()};e.unshift(t),localStorage.setItem("stored-tickets",JSON.stringify(e)),n(e),g()};return Object(a.jsx)(k,{className:v.a["form-container"],children:Object(a.jsxs)("form",{className:v.a.form,onSubmit:function(e){e.preventDefault(),""!==j.title.trim()&&""!==j.description.trim()&&""!==j.reporter.trim()&&""!==j.assignee.trim()||_({isError:!0,title:j.title.trim().length?"":"error",description:j.description.trim().length?"":"error",reporter:j.reporter.trim().length?"":"error",assignee:j.assignee.trim().length?"":"error"}),""!==j.title.trim()&&""!==j.description.trim()&&""!==j.reporter.trim()&&""!==j.assignee.trim()&&(_({isError:!1,title:"",description:"",reporter:"",assignee:""}),C())},children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title"}),Object(a.jsx)("input",{className:h.title.length?v.a.error:"",id:"title",type:"text",placeholder:"Add a descriptive title",value:j.title,onChange:function(e){return f("title",e)}}),Object(a.jsx)("label",{htmlFor:"description",children:"Description"}),Object(a.jsx)("textarea",{className:h.description.length?v.a.error:"",id:"description",placeholder:"Add a short description",value:j.description,onChange:function(e){return f("description",e)}}),Object(a.jsxs)("div",{className:v.a.names,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"reporter",children:"Reporter"}),Object(a.jsx)("input",{className:h.reporter.length?v.a.error:"",id:"reporter",type:"text",placeholder:"Reporter",value:j.reporter,onChange:function(e){return f("reporter",e)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"assignee",children:"Assignee"}),Object(a.jsx)("input",{className:h.assignee.length?v.a.error:"",id:"assignee",type:"text",placeholder:"Assignee",value:j.assignee,onChange:function(e){return f("assignee",e)}})]})]}),Object(a.jsx)("label",{htmlFor:"priority",children:"Priority"}),Object(a.jsxs)("select",{id:"priority",name:"priority",onChange:function(e){return f("priority",e)},children:[Object(a.jsx)("option",{children:"Low"}),Object(a.jsx)("option",{children:"Medium"}),Object(a.jsx)("option",{children:"High"})]}),Object(a.jsxs)("div",{className:v.a["button-container"],children:[Object(a.jsx)(p,{className:v.a["button-green"],children:"Add"}),Object(a.jsx)(p,{className:v.a["button-red"],type:"button",onClick:g,children:"Cancel"})]}),h.isError&&Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:v.a["error-msg"],children:"Please enter all fields!"})})]})})},N=i(17),C=i(16),S=i.n(C),T=function(e){var t="".concat(S.a.card," ").concat(e.className?e.className:"");return Object(a.jsx)("div",{className:t,onClick:e.onClick,children:e.children})},I=i(2),w=i.n(I),D=function(e){var t=Object(r.useContext)(l),i=Object(s.a)(t,2),c=i[0],n=i[1],o=Object(r.useState)(!1),d=Object(s.a)(o,2),j=d[0],u=d[1],m=function(){u(!j)};return Object(a.jsx)("li",{children:Object(a.jsxs)(k,{className:"".concat(w.a["ticket-container"]," ").concat(e.isSolved?w.a["ticket-solved"]:""," ").concat(w.a["pop-in"]),children:[Object(a.jsxs)("div",{className:w.a["ticket-buttons"],children:[Object(a.jsx)(p,{className:e.isSolved?w.a.solved:w.a["button-green"],onClick:function(t){t.preventDefault();var i=Object(N.a)(c),r=i.filter((function(t){return t.id===e.id}))[0],o=r.id;r.isSolved=!r.isSolved,i[o]=r,localStorage.setItem("stored-tickets",JSON.stringify(i)),n(i)},children:e.isSolved?"Solved":"Open"}),Object(a.jsx)(p,{className:w.a["button-red"],onClick:m,children:"X"})]}),Object(a.jsxs)(T,{className:w.a.ticket,onClick:function(){e.openModal(e.id)},children:[Object(a.jsx)("h3",{className:w.a["crop-title"],style:{color:"".concat(e.isSolved?"#6acdf5":e.priorityColor)},children:e.title}),Object(a.jsx)("p",{className:"".concat(w.a.description," ").concat(w.a["crop-description"]),children:e.description}),Object(a.jsxs)("div",{className:w.a.names,children:[Object(a.jsx)("h4",{children:"Reporter:"}),Object(a.jsx)("p",{className:w.a["crop-name"],children:e.reporter}),Object(a.jsx)("h4",{className:w.a.separator,children:"Assignee:"}),Object(a.jsx)("p",{className:w.a["crop-name"],children:e.assignee})]}),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Priority:"}),Object(a.jsx)("p",{style:{color:e.priorityColor},children:e.priority})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Created:"}),Object(a.jsx)("p",{children:e.date})]})]})]}),j&&Object(a.jsxs)("div",{className:w.a["confirm-delete"],children:[Object(a.jsx)("p",{children:"Are you sure you want to delete this?"}),Object(a.jsxs)("div",{className:w.a["button-container"],children:[Object(a.jsx)(p,{className:w.a["button-green"],onClick:function(){e.onDelete(e.id)},children:"Yes"}),Object(a.jsx)(p,{className:w.a["button-red"],onClick:m,children:"No"})]})]})]})})},F=i(13),J=i.n(F),M=function(e){var t=Object(r.useContext)(l),i=Object(s.a)(t,2),c=i[0],n=i[1],o=function(e){var t=c.filter((function(t){return t.id!==e}));localStorage.setItem("stored-tickets",JSON.stringify(t)),n(t)},d=function(t){e.openModal(t)};return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("ul",{className:J.a["ticket-list"],children:c.map((function(e){return Object(a.jsx)(D,{id:e.id,isSolved:e.isSolved,title:e.title,description:e.description,reporter:e.reporter,assignee:e.assignee,date:e.date,priority:e.priority,priorityColor:e.priorityColor,onDelete:o,openModal:d},e.id)}))}),0===c.length&&Object(a.jsx)("li",{className:J.a.msg,children:"No reported issues"})]})},L=i(10),A=i.n(L),P=function(e){var t=Object(r.useContext)(l),i=Object(s.a)(t,1)[0].filter((function(t){return t.id===e.ticketID}))[0],c=document.querySelector("#modal-root"),n=function(){e.closeModal()};return o.a.createPortal(Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("div",{className:A.a.backdrop,onClick:n}),Object(a.jsxs)(T,{className:A.a["modal-overlay"],children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h3",{style:{color:i.priorityColor},children:i.title}),Object(a.jsx)(p,{onClick:n,children:"Close"})]}),Object(a.jsx)("p",{className:A.a.description,children:i.description}),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Reporter:"}),Object(a.jsx)("p",{children:i.reporter})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Assignee:"}),Object(a.jsx)("p",{children:i.assignee})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Priority:"}),Object(a.jsx)("p",{style:{color:i.priorityColor},children:i.priority})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Created:"}),Object(a.jsx)("p",{children:i.date})]})]})]})]}),c)};i(23);var B=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),i=t[0],c=t[1],n=Object(r.useState)({isShowing:!1,ID:""}),o=Object(s.a)(n,2),l=o[0],j=o[1];setTimeout((function(){document.body.className=""}),2e3);var u=function(){return c(!i)},p=function(e){j({isShowing:!l.isShowing,ID:e})};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{onToggle:u}),Object(a.jsxs)(d,{children:[i&&Object(a.jsx)(y,{isOpen:i,onClose:u}),Object(a.jsx)(M,{openModal:p}),l.isShowing&&Object(a.jsx)(P,{ticketID:l.ID,closeModal:p})]})]})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.215c55f7.chunk.js.map