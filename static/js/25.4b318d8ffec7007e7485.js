webpackJsonp([25],{"+/8o":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"form-elements"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("vuestic-widget",{attrs:{headerText:"Inputs"}},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("fieldset",[e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group"},[e("input",{attrs:{id:"simple-input",required:""}}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"simple-input"}},[a._v("Text input")]),e("i",{staticClass:"bar"})])]),a._v(" "),e("div",{staticClass:"form-group with-icon-right",class:{"has-error":a.errors.has("successfulEmail"),valid:a.isSuccessfulEmailValid}},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.successfulEmail,expression:"successfulEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"successfulEmail",name:"successfulEmail",required:""},domProps:{value:a.successfulEmail},on:{input:function(t){t.target.composing||(a.successfulEmail=t.target.value)}}}),a._v(" "),e("i",{staticClass:"fa fa-exclamation-triangle error-icon icon-right input-icon"}),a._v(" "),e("i",{staticClass:"fa fa-check valid-icon icon-right input-icon"}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"successfulEmail"}},[a._v("Email (validated with success)")]),e("i",{staticClass:"bar"}),a._v(" "),e("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("successfulEmail"),expression:"errors.has('successfulEmail')"}],staticClass:"help text-danger"},[a._v("\n                      "+a._s(a.errors.first("successfulEmail"))+"\n                    ")])])]),a._v(" "),e("div",{staticClass:"form-group with-icon-right",class:{"has-error":a.errors.has("wrongEmail")}},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.wrongEmail,expression:"wrongEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"wrongEmail",name:"wrongEmail",required:""},domProps:{value:a.wrongEmail},on:{input:function(t){t.target.composing||(a.wrongEmail=t.target.value)}}}),a._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("wrongEmail"),expression:"errors.has('wrongEmail')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"wrongEmail"}},[a._v("Email (validated)")]),e("i",{staticClass:"bar"}),a._v(" "),e("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("wrongEmail"),expression:"errors.has('wrongEmail')"}],staticClass:"help text-danger"},[a._v(a._s(a.errors.first("wrongEmail"))+"\n                    ")])])]),a._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group"},[e("textarea",{attrs:{type:"text",id:"simple-textarea",required:""}}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"simple-textarea"}},[a._v("Textarea")]),e("i",{staticClass:"bar"})])])])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("fieldset",[e("div",{staticClass:"form-group with-icon-left"},[e("div",{staticClass:"input-group"},[e("input",{attrs:{id:"input-icon-left",name:"input-icon-left",required:""}}),a._v(" "),e("i",{staticClass:"fa fa-envelope-o icon-left input-icon"}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"input-icon-left"}},[a._v("Input with icon")]),e("i",{staticClass:"bar"})])]),a._v(" "),e("div",{staticClass:"form-group with-icon-right"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.clearableText,expression:"clearableText"}],attrs:{id:"clear-input",name:"clear-input",required:""},domProps:{value:a.clearableText},on:{input:function(t){t.target.composing||(a.clearableText=t.target.value)}}}),a._v(" "),e("i",{staticClass:"fa fa-times icon-right input-icon pointer",on:{click:function(t){a.clear("clearableText")}}}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"clear-input",role:"button"}},[a._v("Input with clear button")]),e("i",{staticClass:"bar"})])]),a._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group"},[e("input",{attrs:{id:"inputWithDescription",required:"",title:""}}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"simple-input"}},[a._v("Text input (with description)")]),e("i",{staticClass:"bar"}),a._v(" "),e("small",{staticClass:"help text-secondary"},[a._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                    ")])])])])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("fieldset",[e("div",{staticClass:"form-group form-group-w-btn"},[e("div",{staticClass:"input-group"},[e("input",{attrs:{id:"input-w-btn",required:""}}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"input-w-btn"}},[a._v("Input with button")]),e("i",{staticClass:"bar"})]),a._v(" "),e("div",{staticClass:"btn btn-micro btn-primary"},[a._v("UPLOAD")])]),a._v(" "),e("div",{staticClass:"form-group form-group-w-btn"},[e("div",{staticClass:"input-group"},[e("input",{attrs:{id:"input-w-btn-round",required:""}}),a._v(" "),e("label",{staticClass:"control-label",attrs:{for:"input-w-btn-round"}},[a._v("Input with round button")]),e("i",{staticClass:"bar"})]),a._v(" "),e("div",{staticClass:"btn btn-primary btn-with-icon btn-micro rounded-icon"},[e("div",{staticClass:"btn-with-icon-content"},[e("i",{staticClass:"ion-android-cloud-outline ion"})])])])])])])])])],1)]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("vuestic-widget",{attrs:{headerText:"Selects"}},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("fieldset",[e("vuestic-simple-select",{attrs:{label:"Simple select",options:a.simpleOptions},model:{value:a.simpleSelectModel,callback:function(t){a.simpleSelectModel=t},expression:"simpleSelectModel"}}),a._v(" "),e("vuestic-simple-select",{attrs:{label:"Country select",options:a.countriesList},model:{value:a.chosenCountry,callback:function(t){a.chosenCountry=t},expression:"chosenCountry"}})],1)]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("fieldset",[e("vuestic-multi-select",{attrs:{label:"Mutliselect",options:a.simpleOptions},model:{value:a.multiSelectModel,callback:function(t){a.multiSelectModel=t},expression:"multiSelectModel"}}),a._v(" "),e("vuestic-multi-select",{attrs:{label:"Country multiselect",options:a.countriesList},model:{value:a.multiSelectCountriesModel,callback:function(t){a.multiSelectCountriesModel=t},expression:"multiSelectCountriesModel"}})],1)])])])])],1)]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("vuestic-widget",{attrs:{headerText:"Checkboxes, Radios, Swithces"}},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("fieldset",[e("div",{staticClass:"abc-checkbox abc-checkbox-primary"},[e("input",{attrs:{id:"checkbox1",type:"checkbox"}}),a._v(" "),e("label",{attrs:{for:"checkbox1"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])]),a._v(" "),e("div",{staticClass:"abc-checkbox abc-checkbox-primary"},[e("input",{attrs:{id:"checkbox2",type:"checkbox",checked:""}}),a._v(" "),e("label",{attrs:{for:"checkbox2"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])]),a._v(" "),e("div",{staticClass:"abc-checkbox abc-checkbox-primary"},[e("input",{attrs:{id:"checkbox3",type:"checkbox",disabled:""}}),a._v(" "),e("label",{attrs:{for:"checkbox3"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])]),a._v(" "),e("div",{staticClass:"abc-checkbox abc-checkbox-primary"},[e("input",{attrs:{id:"checkbox4",type:"checkbox",disabled:"",checked:""}}),a._v(" "),e("label",{attrs:{for:"checkbox4"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])])])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("fieldset",[e("div",{staticClass:"abc-checkbox abc-checkbox-primary abc-checkbox-circle"},[e("input",{attrs:{id:"checkbox7",type:"checkbox"}}),a._v(" "),e("label",{attrs:{for:"checkbox7"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])]),a._v(" "),e("div",{staticClass:"abc-checkbox abc-checkbox-primary abc-checkbox-circle"},[e("input",{attrs:{id:"checkbox8",type:"checkbox",checked:""}}),a._v(" "),e("label",{attrs:{for:"checkbox8"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])]),a._v(" "),e("div",{staticClass:"abc-checkbox abc-checkbox-primary abc-checkbox-circle"},[e("input",{attrs:{id:"checkbox9",type:"checkbox",disabled:""}}),a._v(" "),e("label",{attrs:{for:"checkbox9"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])]),a._v(" "),e("div",{staticClass:"abc-checkbox abc-checkbox-primary abc-checkbox-circle"},[e("input",{attrs:{id:"checkbox10",type:"checkbox",checked:"",disabled:""}}),a._v(" "),e("label",{attrs:{for:"checkbox10"}},[e("span",{staticClass:"abc-label-text"},[a._v("Subscribe to newsletter")])])])])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("fieldset",[e("div",{staticClass:"radio abc-radio abc-radio-primary"},[e("input",{attrs:{type:"radio",name:"radio1",id:"radio1",value:"option1",checked:""}}),a._v(" "),e("label",{attrs:{for:"radio1"}},[e("span",{staticClass:"abc-label-text"},[a._v("Radio")])])]),a._v(" "),e("div",{staticClass:"radio abc-radio abc-radio-primary"},[e("input",{attrs:{type:"radio",name:"radio1",id:"radio2",value:"option2"}}),a._v(" "),e("label",{attrs:{for:"radio2"}},[e("span",{staticClass:"abc-label-text"},[a._v("Radio")])])])]),a._v(" "),e("fieldset",[e("div",{staticClass:"radio abc-radio abc-radio-primary"},[e("input",{attrs:{type:"radio",name:"radio3",id:"radio3",value:"option3",disabled:""}}),a._v(" "),e("label",{attrs:{for:"radio3"}},[e("span",{staticClass:"abc-label-text"},[a._v("Disabled Radio")])])]),a._v(" "),e("div",{staticClass:"radio abc-radio abc-radio-primary"},[e("input",{attrs:{type:"radio",name:"radio4",id:"radio4",value:"option4",checked:"",disabled:""}}),a._v(" "),e("label",{attrs:{for:"radio4"}},[e("span",{staticClass:"abc-label-text"},[a._v("Disabled Radio")])])])])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("fieldset",[e("vuestic-switch",{model:{value:a.isMale,callback:function(t){a.isMale=t},expression:"isMale"}},[e("span",{attrs:{slot:"trueTitle"},slot:"trueTitle"},[a._v("Male")]),a._v(" "),e("span",{attrs:{slot:"falseTitle"},slot:"falseTitle"},[a._v("Female")])])],1)])])])])],1)])])},s=[],l={render:i,staticRenderFns:s};t.a=l},"1d7L":function(a,t,e){"use strict";function i(a){e("zvA5")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("wwVM"),l=e("+/8o"),r=e("VU/8"),o=i,n=r(s.a,l.a,!1,o,null,null);t.default=n.exports},bKNE:function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,".abc-checkbox,.abc-radio{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}input[type=checkbox]:disabled,input[type=checkbox]:disabled+label,input[type=radio]:disabled,input[type=radio]:disabled+label{cursor:not-allowed}","",{version:3,sources:["D:/Profiles/luleplan/WebstormProjects/AG2R_CS_PB_DASHBOARD/AG2R_CS_PB_DASHBOARD/src/components/forms/form-elements/FormElements.vue"],names:[],mappings:"AACA,yBACE,8BAAgC,AAChC,8BAAgC,AAChC,uBAAyB,AACzB,uBAAwB,AACpB,oBAAqB,AACjB,0BAA4B,CACrC,AACD,8HAEE,kBAAoB,CACrB",file:"FormElements.vue",sourcesContent:["\n.abc-checkbox, .abc-radio {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\ninput[type=checkbox]:disabled + label, input[type=radio]:disabled + label,\ninput[type=checkbox]:disabled, input[type=radio]:disabled {\n  cursor: not-allowed;\n}\n"],sourceRoot:""}])},fC61:function(a,t,e){"use strict";t.a=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]},wwVM:function(a,t,e){"use strict";var i=e("rhzU"),s=e("/LRh"),l=e("IqWy"),r=e("fC61");t.a={name:"form-elements",components:{VuesticSwitch:i.default,VuesticSimpleSelect:s.default,VuesticMultiSelect:l.default},computed:{isSuccessfulEmailValid:function(){var a=!1;return this.formFields.successfulEmail&&(a=this.formFields.successfulEmail.validated&&this.formFields.successfulEmail.valid),a}},data:function(){return{isMale:!0,countriesList:r.a,chosenCountry:"",clearableText:"",successfulEmail:"andrei@dreamsupport.io",wrongEmail:"andrei@dreamsupport",simpleOptions:["First option","Second option","Third option"],simpleSelectModel:"",multiSelectModel:[],multiSelectCountriesModel:[]}},methods:{clear:function(a){this[a]=""}},mounted:function(){this.$validator.validateAll()}}},zvA5:function(a,t,e){var i=e("bKNE");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e("rjj0")("47f8b844",i,!0)}});
//# sourceMappingURL=25.4b318d8ffec7007e7485.js.map