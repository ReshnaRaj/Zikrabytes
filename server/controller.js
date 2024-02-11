const page=require('./PageModel')
module.exports.addpage=async(req,res)=>{
    try {
        const {title,description}=req.body
        console.log(req.body,"data added")
        console.log(req.file,"files of images...")
        req.file.path = await req.file.path.replace("public", "");
        const image = req.file.path.replace(/\\/g, '/');
        console.log("add pages working...")
        console.log(image);
        const pages=new page({
            ptitle:title,
            pdescription:description,
            img:image

        })
        console.log(pages,"data added")
        const newpage=await pages.save()
        res.status(200).json({
            newpage,
            message: "New page Added",
            created: true,
          });
        
    } catch (error) {
        console.log(error,"Data error")
        
    }
}
module.exports.getData = async (req, res) => {
    try {
    //   console.log("data getting");
      const data = await page.find({});
      console.log(data,"get data");
      res.status(200).json({ data, success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error', success: false });
    }
  };
  