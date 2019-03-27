(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,n){e.exports=n(485)},201:function(e,t,n){},485:function(e,t,n){"use strict";n.r(t);var a,l=n(1),r=n.n(l),c=n(9),o=n.n(c),i=n(24),s=n(38),u=n(25),E=n(14),m=(a={events:[]},Object(E.a)(a,"OPEN_EVENT_FORM",!1),Object(E.a)(a,"editingEvent",null),a),d=Object(s.b)({calendar:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0,l=a.type,r=a.payload;switch(l){case"OPEN_EVENT_FORM":return Object(u.a)({},n,(e={},Object(E.a)(e,"OPEN_EVENT_FORM",!n.OPEN_EVENT_FORM),Object(E.a)(e,"editingEvent",m.editingEvent),e));case"CREATE_EVENT":return Object(u.a)({},n,Object(E.a)({events:n.events.concat([Object(u.a)({id:Date.now()+Math.floor(1e3*Math.random())},r)])},"OPEN_EVENT_FORM",!1));case"EDIT_EVENT":return Object(u.a)({},n,Object(E.a)({editingEvent:null,events:n.events.map(function(e){return e.id!==r.id?e:Object(u.a)({},e,r)})},"OPEN_EVENT_FORM",!1));case"OPEN_EDIT_EVENT":return Object(u.a)({},n,Object(E.a)({editingEvent:r},"OPEN_EVENT_FORM",!0));case"DELETE_EVENT":return Object(u.a)({},n,(t={editingEvent:null},Object(E.a)(t,"OPEN_EVENT_FORM",!1),Object(E.a)(t,"events",n.events.filter(function(e){return e.id!==r})),t));default:return n}}}),v=Object(s.c)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=(n(201),n(39)),O=(n(202),n(40)),b=n(10),p=n(113),N=n.n(p),_=n(55),g=n.n(_),h=(n(431),n(432),function(){return{type:"OPEN_EVENT_FORM"}});g.a.locale("en-gb");var y=N.a.momentLocalizer(g.a),T={Solo:{background:"#31ad9d"},Team:{background:"#5131ad"},Company:{background:"#3160ad"}},j={openEditEvent:function(e){return{type:"OPEN_EDIT_EVENT",payload:e.id}}},C=Object(i.b)(function(e){return{events:e.calendar.events}},j)(function(e){var t=e.events,n=e.openEditEvent;return r.a.createElement(N.a,{localizer:y,views:["month"],events:t,titleAccessor:"name",startAccessor:"date",endAccessor:function(e){return g()(e.date).add(1,"hour").toDate()},eventPropGetter:function(e){return{style:T[e.state]}},popup:!0,selectable:!0,onSelectEvent:n})}),V=n(192),w=n(114),F=n.n(w);function P(){var e=Object(f.a)(["\n  &__overlay {\n    z-index: 1000;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    align-items: center;\n    justify-content: center;\n    outline: none;\n    bottom: 0px;\n    background-color: rgba(0,0,0, 0.5);\n\n    .ReactModal__Content { \n      outline: none;  \n    }\n\n  }\n"]);return P=function(){return e},e}F.a.setAppElement(document.getElementById("root"));var S=Object(O.a)(function(e){var t=e.className,n=e.contentClassName,a=e.onClose,l=Object(V.a)(e,["className","contentClassName","onClose"]),c="".concat(t,"__overlay columns");return r.a.createElement(F.a,Object.assign({shouldCloseOnOverlayClick:!0,onRequestClose:a,overlayClassName:c,className:n},l))})(P()),D=n(189),M=n(56),R=(n(483),n(190).a),x=["Solo","Team","Company"],k=M.object().shape({name:M.string().required("Event name is required").default("").max(20),date:M.date().required("Date is required!").typeError("Please enter a date").default(null),state:M.string().oneOf(["Solo","Team","Company"]).default("Solo")}),I=Object(D.a)({mapPropsToValues:function(e){var t=e.event,n=void 0===t?{}:t;return k.cast(n)},validationSchema:k,handleSubmit:function(e,t){t.props.onSubmit(e)}})(function(e){var t=e.values,n=e.touched,a=e.errors,l=e.handleChange,c=e.handleBlur,o=e.handleSubmit,i=e.setFieldValue,s=e.onDeleteEvent;return r.a.createElement("form",{style:{flex:1},onSubmit:o},r.a.createElement(b.Field,null,r.a.createElement("label",{className:"label",htmlFor:"name"},"Event Name"),r.a.createElement(b.Control,null,r.a.createElement(b.Input,{autoComplete:"off",maxLength:"20",className:"".concat(a.name&&n.name?"is-danger":""),name:"name",onChange:l,onBlur:c,value:t.name})),a.name&&n.name&&r.a.createElement("p",{className:"help is-danger"},a.name)),r.a.createElement(b.Field,null,r.a.createElement("label",{className:"label",htmlFor:"date"},"Date"),r.a.createElement(b.Control,null,r.a.createElement(R,{className:"input ".concat(a.date&&n.date?"is-danger":""),selected:t.date,onChange:function(e){i("date",e)},showTimeSelect:!0,timeIntervals:15,dateFormat:"dd/MM/yy HH:mm",timeFormat:"HH:mm",name:"date",onBlur:c,autoComplete:"off"})),a.date&&n.date&&r.a.createElement("p",{className:"help is-danger"},a.date)),r.a.createElement(b.Field,null,r.a.createElement("label",{className:"label",htmlFor:"state"},"State"),r.a.createElement(b.Control,null,r.a.createElement("div",{className:"select ".concat(a.state&&n.state?"is-danger":"")},r.a.createElement("select",{className:"select",name:"state",onChange:l,onBlur:c,value:t.state},x.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})))),a.state&&n.state&&r.a.createElement("p",{className:"help is-danger"},a.state)),r.a.createElement("div",{className:"is-flex",style:{flexDirection:"row-reverse"}},r.a.createElement(b.Button,{style:{flex:"0 25%"},info:!0,type:"submit"},"Save"),s&&r.a.createElement(b.Button,{outlined:!0,danger:!0,style:{marginRight:"1em"},onClick:s,type:"button"},r.a.createElement(b.Icon,{small:!0},r.a.createElement("i",{className:"fa fa-trash-alt"})))))}),B={createEvent:function(e){return e.id?function(e){return{type:"EDIT_EVENT",payload:e}}(e):function(e){return{type:"CREATE_EVENT",payload:e}}(e)},onCloseModal:h,deleteEvent:function(e){return{type:"DELETE_EVENT",payload:e.id}}},A=Object(i.b)(function(e){return{isOpen:e.calendar.OPEN_EVENT_FORM,editingEvent:(t=e.calendar.events,n=e.calendar.editingEvent,t.find(function(e){return e.id===n}))};var t,n},B)(function(e){var t=e.isOpen,n=e.createEvent,a=e.onCloseModal,l=e.editingEvent,c=e.deleteEvent;return r.a.createElement(S,{contentClassName:"column is-full-mobile is-half-tablet is-one-third-desktop",isOpen:t,onClose:a},r.a.createElement("div",null,r.a.createElement(b.Panel,null,r.a.createElement(b.Panel.Heading,null,"New Event"),r.a.createElement(b.Panel.Block,{style:{backgroundColor:"white"}},r.a.createElement(I,{onSubmit:n,event:l,onDeleteEvent:l&&function(){c(l)}})))))});function L(){var e=Object(f.a)(["\n  flex:1;\n  margin-bottom: 1em;\n"]);return L=function(){return e},e}function q(){var e=Object(f.a)(["\n  margin: 1em 0;\n"]);return q=function(){return e},e}function H(){var e=Object(f.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column; \n"]);return H=function(){return e},e}var X=Object(O.a)(b.Container)(H()),z=O.a.div(q()),J=function(e){return r.a.createElement(b.Button,Object.assign({primary:!0},e),r.a.createElement(b.Icon,null,r.a.createElement("i",{className:"fa fa-plus"})),r.a.createElement("span",null,"New Event"))},U=O.a.div(L()),G={onNewEventClick:h},K=Object(i.b)(function(e){return{events:e.calendar.events}},G)(function(e){e.events;var t=e.onNewEventClick;return r.a.createElement(X,null,r.a.createElement(z,null,r.a.createElement(J,{onClick:t})),r.a.createElement(U,{style:{height:"unset"}},r.a.createElement(C,null)),r.a.createElement(A,null))});o.a.render(r.a.createElement(i.a,{store:v},r.a.createElement(K,null)),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.78f76ec5.chunk.js.map