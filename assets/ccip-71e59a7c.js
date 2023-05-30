import{B as f,m as b,s as m,n as y,I as w,o as C,p as E,q as P,t as R,H as g,u as T,__tla as _}from"./index-ade6a6cc.js";let h,k,p,O,v=Promise.all([(()=>{try{return _}catch{}})()]).then(async()=>{class x extends f{constructor({callbackSelector:e,cause:t,data:n,extraData:c,sender:d,urls:a}){var l;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(l=t.metaMessages)!=null&&l.length?"":[],"Offchain Gateway Call:",a&&["  Gateway URL(s):",...a.map(u=>`    ${b(u)}`)],`  Sender: ${d}`,`  Data: ${n}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class L extends f{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${b(t)}`,`Response: ${m(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class $ extends f{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function M(r,e){if(!y(r))throw new w({address:r});if(!y(e))throw new w({address:e});return r.toLowerCase()===e.toLowerCase()}O="0x556f1830",p={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]},k=async function(r,{blockNumber:e,blockTag:t,data:n,to:c}){const{args:d}=C({data:n,abi:[p]}),[a,l,u,s,o]=d;try{if(!M(c,a))throw new $({sender:a,to:c});const i=await h({data:u,sender:a,urls:l}),{data:S}=await E(r,{blockNumber:e,blockTag:t,data:P([s,R([{type:"bytes"},{type:"bytes"}],[i,o])]),to:c});return S}catch(i){throw new x({callbackSelector:s,cause:i,data:n,extraData:o,sender:a,urls:l})}},h=async function({data:r,sender:e,urls:t}){var c;let n=new Error("An unknown error occurred.");for(let d=0;d<t.length;d++){const a=t[d],l=a.includes("{sender}")||a.includes("{data}")?"GET":"POST",u=l==="POST"?{data:r,sender:e}:void 0;try{const s=await fetch(a.replace("{sender}",e).replace("{data}",r),{body:JSON.stringify(u),method:l});let o;if((c=s.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?o=(await s.json()).data:o=await s.text(),!s.ok){n=new g({body:u,details:m(o.error)||s.statusText,headers:s.headers,status:s.status,url:a});continue}if(!T(o)){n=new L({result:o,url:a});continue}return o}catch(s){n=new g({body:u,details:s.message,url:a})}}throw n}});export{v as __tla,h as ccipFetch,k as offchainLookup,p as offchainLookupAbiItem,O as offchainLookupSignature};
