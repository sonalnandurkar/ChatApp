import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersdataService } from '../usersdata.service';
import * as $ from 'jquery'



@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.css'],
})
export class DesktopViewComponent implements OnInit {
 users:any;
 searchToken = '';
 public innerWidth: any;
//  @Input()
//  users:any= [];

constructor(private userdata:UsersdataService){
console.log(userdata.users());  
this.users = userdata.users();
$(document).ready(function(){
var arr:any=[];

     //For toggle the list
      $('.card_head').on('click',function(){
        $('.div_wrap').slideToggle();
      });

    //For open the chatbox
    $(document).on('click', '#sidebar-user-box',  function() {
      
          // var userID = $(this).attr("class");
          var username = $(this).children().text() ;
          var userID =$(this).attr('data-id');
          console.log(userID);
          if ($.inArray(userID, arr) != -1)  
          {
              arr.splice($.inArray(userID, arr), 1);  
                  
          }

          arr.unshift(userID);

          
      
          // var chatPopup =  '<div rel="'+userID+'" class="msg_box" >'+
          // '<div class="msg_head">'+ username +'<div id="close" class="glyphicon glyphicon-remove" closeid="'+userID+'"></div></div>'+
          // '<div class="msg_wrap"> <div class="msg_body"> <div class="msg_push"></div> </div>'+
          // '<div class="msg_footer"><button type="button" class="btn btn-primary btn-xs send">Send</button><textarea class="msg_input" rows="4"></textarea></div></div></div>' ;     
        
         var chatPopup = '<div class="panel panel-chat" rel="'+userID+'" >'+'<div class="panel-heading"><a href="#" class="chatMinimize" onclick="return false"><span>'+ username +'</span></a><a href="#" class="chatClose" onclick="false"><i class="glyphicon glyphicon-remove close-icon"></i></a><div class="clearFix"></div></div>'+
                          '<div class="panel-body"><div class="clearFix"></div></div>'+'<div class="panel-footer"><button type="button" class="btn btn-primary btn-xs send">Send</button><textarea name="textMessage" cols="0" rows="0"></textarea></div></div>';
                        
            $("#chat").append(  chatPopup  );
            displayChatBox();
            console.log(arr,"--------------");
        
    });
      
     
     //For display the multiple chatbox
    function displayChatBox(){ 
       
          if(innerWidth > 768){
            var i = 290; // start position
            var j = 245;  //next position
            $.each(arr, function(index:any,value:any ) {  
              console.log("",index,value);
              console.log(value);
              
                if(index < 3) { 
                    $('[rel="'+value+'"]').css("right",i);
                    $('[rel="'+value+'"]').show();
                      i = i+j;   
                } 
              
                else {
                  $('[rel="'+value+'"]').remove();
                
                  }
            }); 
          }
          //For tablet
          else {
            var i = 287; // start position
            var j = 240;  //next position
            $.each(arr, function(index:any,value:any ) {  
              console.log(index,value);
              
                if(index < 2) { 
                    $('[rel="'+value+'"]').css("right",i);
                    $('[rel="'+value+'"]').show();
                      i = i+j;   
                } 
              
                else {
                  console.log("else");
                  
                  $('[rel="'+value+'"]').remove();
                
                  }
            }); 
          }
    } 
   
      
    //For close the chatbox
    $(document).on('click', '.chatClose', function() {
        console.log("close");
        console.log(arr,"jjjjjjjjjjjjj");
        
            var chatbox = $(this).parents().parents().attr("rel") ;
            $('[rel="'+chatbox+'"]').hide();
            //update require
            arr.splice($.inArray(chatbox, arr),1);
          var i = 290; // start position
          var j = 245;  //next position
            $.each( arr, function( index, value ) {          
                $('[rel="'+value+'"]').css("right",i);
                       i = i+j;
                  });
            
            return false;
     }); 


   //For minimize
   $(".panel.panel-chat > .panel-heading > .chatMinimize").on('click', function(){
     console.log("minimize");
     
    if($(this).parent().parent().hasClass('mini'))
    {
        $(this).parent().parent().removeClass('mini').addClass('normal');

        $('.panel.panel-chat > .panel-body').animate({height: "250px"}, 500).show();

        $('.panel.panel-chat > .panel-footer').animate({height: "75px"}, 500).show();
    }
    else
    {
        $(this).parent().parent().removeClass('normal').addClass('mini');

        $('.panel.panel-chat > .panel-body').animate({height: "0"}, 500);

        $('.panel.panel-chat > .panel-footer').animate({height: "0"}, 500);

        setTimeout(function() {
            $('.panel.panel-chat > .panel-body').hide();
            $('.panel.panel-chat > .panel-footer').hide();
        }, 500);


    }

   });


  });
 }
 
 
ngOnInit(): void {
  this.innerWidth = window.innerWidth;
}  

 //For search the user 
  Search() {
    if (this.searchToken == '') {
      this.ngOnInit();
    } else {
      this.users =
        this.users.filter((res:any) => {
          return res.searchToken.toLocaleLowerCase().match(
            this.searchToken.toLocaleLowerCase()
          );
        });
    }
  }

  
}

//style="right:322px"
