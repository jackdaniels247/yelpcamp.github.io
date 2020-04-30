 var express= require("express");
 var app= express();
 var mongoose= require("mongoose");
 var body= require("body-parser");
 var passport=require("passport");
 var local=require("passport-local");
 var passportlocalmongoose=require("passport-local-mongoose");
 var User=require("./models/user");
 var Camp=require("./models/campgrounds");
 var method=require("method-override");
 var flash=require("connect-flash");
 var Comment=require("./models/comments");
 var seedDB= require("./seeds");
 
  var campRoutes=require("./routes/campgrounds");
 var commentRoutes=require("./routes/comments");
 var indexRoutes=require("./routes/index");
  mongoose.connect(process.env.DATABASEURL,{useNewUrlParser: true});

 app.use(body.urlencoded({extended:true}));
  app.use(require("express-session")({
     secret:"hello mister dj",
     resave:false,
     saveUninitialized:false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(method("_method"));
 app.use(flash());
 
 passport.use(new local(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());
 
 app.use(function(req,res,next){
  res.locals.currentUser=req.user;
  res.locals.error=req.flash("error");
  res.locals.success=req.flash("success");
  next();
 });
 
 app.use("/campgrounds",campRoutes);
 app.use("/campgrounds/:id/comments",commentRoutes);
 app.use(indexRoutes);
 
 app.set("view engine","ejs");
 
 //seedDB();

app.listen(process.env.PORT,process.env.ID,function(){
    console.log("the yelp camp app has started"); 
 });
 