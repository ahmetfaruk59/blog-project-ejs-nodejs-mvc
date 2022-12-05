const axios=require('axios');

const tumMakaleleriGetir=async (req,res)=>{
    
    try {
        const blogApi=await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts');
        res.render('./makaleler/index',{makaleler:blogApi.data});
    
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        res.json({
            mesaj:'Hata çıktı.'+error.response.data
        });
    }
    res.render('./makaleler/index');
}; 


const tekMakaleleriGetir=async (req,res)=>{
    let makaleID=req.params.makaleID;
    try {
        const tekMakale=await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts/'+makaleID);
        res.render('./makaleler/makale',{makale:tekMakale.data});

    
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        res.json({
            mesaj:error.response.data
        });
    }
}; 

const aramaYap=async (req,res)=>{
    const aranacak=req.body.searchInput;
    try {
        const blogApi=await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?search='+aranacak);
        res.render('./makaleler/index',{makaleler:blogApi.data});
    
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        res.json({
            mesaj:'Hata çıktı.'+error.response.data
        });
    }
    res.render('./makaleler/index');
}; 


module.exports={
    tumMakaleleriGetir,
    tekMakaleleriGetir,
    aramaYap,
};

