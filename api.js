getApiResponse =(url,cb) =>{
    request ({url,json:true},(err,{body})=>{if (err) cb(false,err)
   else cb (body,false) })
}
getApiResponse(url,(res,err)=>{
    if (err) console.log(err)
    else console.log(res)

})