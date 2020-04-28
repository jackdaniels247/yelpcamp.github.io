var express=require("express");
var router=express.Router({mergeParams:true});
var Camp=require("../models/campgrounds");
var middleware=require("../middleware/index.js");


router.get("/",function(req,res){
  Camp.find({},function(err,camps){
   if(err){
    console.log(err);
   }
   else{
  res.render("campgrounds",{camp:camps}); 
   }
  });
        
 });
 
router.post("/",middleware.isloggedin,function(req,res){
    var name= req.body.name;
    var price=req.body.price;
    var image= req.body.image;
    var description=req.body.description;
    var author={
     id:req.user._id,
     username:req.user.username
    }
    var newcamp= {name:name,price:price,image:image,description:description,author:author};
    Camp.create(newcamp,function(err,camp){
     if(err)
     {
      console.log(err);
     }
     else
     {
      req.flash("success","Successfully added a Campground!!");
      res.redirect("/campgrounds"); 
     }
    });
    
    
    
 });
 
 router.get("/new",middleware.isloggedin,function(req,res){
    res.render("new"); 
 });
 
router.get("/:id",function(req,res){
  Camp.findById(req.params.id).populate("comments").exec(function(err,foundcamp){
   if(err)
   {
    console.log(err);
   }
   else
   {
    res.render("show",{camp:foundcamp});
   }
    
  });
 });
 
 router.get("/:id/edit",middleware.checkOwnership,function(req, res) {
  
    Camp.findById(req.params.id,function(err,camp){
     if(err){
      res.redirect("/campgrounds");
     }else{
      res.render("edit",{camp:camp}); 
     }
     
    });
 });
 
 router.put("/:id",middleware.checkOwnership,function(req,res){
  
  Camp.findByIdAndUpdate(req.params.id,req.body.camp,function(err,camp){
   if(err){
    res.redirect("/campgrounds");
   }
   else{
    req.flash("success","Successfully updated a Campground!!");
    res.redirect("/campgrounds/"+req.params.id);
   }
   
    
   
  });
 });
 
 router.delete("/:id",middleware.checkOwnership,function(req,res){
  Camp.findByIdAndRemove(req.params.id,function(err,camp){
   if(err){
    res.redirect("/campgrounds");
   }
   else{
    req.flash("success","Successfully deleted a Campground");
        res.redirect("/campgrounds");
   }
  });
 });
 
 module.exports=router;