webpackJsonp([1,2],{93:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(47),r=s(o),a=i(2),d=s(a),u=i(79),l=s(u);e["default"]={template:i(215),route:{data:function(t){return{filters:{u1:":u1"===this.$route.params.u1?"":"all"===this.$route.params.u1?"":this.$route.params.u1,u2:":u2"===this.$route.params.u2?"":"all"===this.$route.params.u2?"":this.$route.params.u2},skip:":skip"===this.$route.params.skip?0:parseInt(this.$route.params.skip),boardSelect:":idBoard"===this.$route.params.idBoard?"none":this.$route.params.idBoard}}},data:function(){return{boardSelect:"",limit:20,foundList:[],boardView:d["default"].get("boardView",{}),totalRecords:0,filters:{u1:"",u2:""},skip:-1}},components:{BoardVisor:l["default"]},methods:{updateRouter:function(){var t=""===this.filters.u1?"all":this.filters.u1,e=""===this.filters.u2?"all":this.filters.u2,i="/visor/"+this.boardView._id+"/"+this.skip+"/"+t+"/"+e;this.$route.router.replace(i),r["default"].setParms({u1:t,u2:e,skip:this.skip,idBoard:this.boardView._id})},Filter:function(){var t={filters:this.filters,limit:this.limit,skip:this.skip};r["default"].filter(this,t).then(function(t){if(this.foundList=t.data.documents,this.totalRecords=t.data.total,this.updateRouter(),this.boardSelect!==this.boardView._id)for(var e in this.foundList)this.foundList[e]._id===this.boardSelect&&this.selectBoard(this.foundList[e])},function(t){this.error=t.data})},selectBoard:function(t){this.boardView=t,d["default"].set("boardView",t),this.updateRouter()}},created:function(){},watch:{skip:function(t,e){this.Filter()}}}},157:function(t,e,i){e=t.exports=i(65)(),e.push([t.id,"h1[_v-57650cfe]{color:#42b983}tr[_v-57650cfe]:hover{background-color:#b9d4cb}","",{version:3,sources:["/./src/components/boardVisor/index.vue"],names:[],mappings:"AACA,gBACE,aAAe,CAChB,AACD,sBACE,wBAA0B,CAC3B",file:"index.vue",sourcesContent:["\nh1[_v-57650cfe] {\n  color: #42b983;\n}\ntr[_v-57650cfe]:hover{\n  background-color: #B9D4CB;\n}\n"],sourceRoot:"webpack://"}])},173:function(t,e,i){var s=i(157);"string"==typeof s&&(s=[[t.id,s,""]]);i(81)(s,{});s.locals&&(t.exports=s.locals)},215:function(t,e){t.exports='<div class="col s12"> <div class="col s12 m6 l3"> <div> <label>{{ $t("visor.found") }} :{{totalRecords}}</label> <div style="text-align: center"> <md-pagination :current-page.sync=skip :page-size=20 :total-records.sync=totalRecords> </md-pagination> </div> <md-input class="col s6 m6 l6" name=white :value.sync=filters.u1 @keyup="Filter() | debounce 300"> {{ $t("visor.whiteName") }} </md-input> <md-input class="col s6 m6 l6" name=black :value.sync=filters.u2 @keyup="Filter() | debounce 300"> {{ $t("visor.blackName") }} </md-input> <div style="height: 65vh;overflow: auto" class="col s12 m12 l12"> <table class=table> <tbody> <tr v-for="board in foundList" @click=selectBoard(board) v-bind:class="[boardView._id === board._id ? \'item-select\' : \'\']"> <td>{{ board.u1}} vs {{ board.u2}}</td> <td>G. {{ board.wins}} M.{{ board.motiv }}</td> </tr> </tbody> </table> </div> </div> </div> <div class="col s12 m6 l9"> <board-visor :board=boardView></board-visor> </div> </div>'},223:function(t,e,i){var s,o;i(173),s=i(93),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}});
//# sourceMappingURL=1.e8a16a78264bd1ee8339.js.map