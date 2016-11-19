$(document).ready(function () {
	$('.menu .item')
	  .tab()
	;
	$('.ui.radio.checkbox')
	  .checkbox()
	;
    $('.ui.toggle.checkbox')
      .checkbox()
    ;
    $('select.dropdown')
      .dropdown()
    ;
    $('.inline.fields').on('click','.item.active', function(){
        $('#clubs').show();
        $('#academic').hide();
        $('#administrative').hide();
    });
    $('.inline.fields').click(function(){
    	var checked = $("input:checked").attr("tabindex");
    	if (checked == '0') {
            $('#clubs').show();
            $('#academic').hide();
            $('#administrative').hide();
        }
        if (checked == '1') {
            $('#academic').show();
            $('#clubs').hide();
            $('#administrative').hide();
        }
        if (checked == '2') {
            $('#administrative').show();
            $('#clubs').hide();
            $('#academic').hide();
        }
    });    

    $('#clubs .button').click(function() {
        console.log('hi');
    });

  //  $('.ui.form.club').form('submit');

    $('.ui.form').form({
        fields: {
          activity_name : 'empty',
          activity_type  : 'empty',
          field_position : 'empty',
          start_day : ['exactLength[10]', 'empty'],
          end_day   : ['exactLength[10]', 'empty'],
          user_name    : 'empty',
          user_phone    : 'empty',
          user_email    : 'empty',
        }
     });
    $('.ui.form')
      .form({
        fields: {
            activity_name : {
            identifier: 'activity_name',
            rules: [
              {
                type   : 'empty',
                prompt : '請輸入活動名稱'
              }
            ]
          },
          activity_type: {
            identifier: 'activity_type',
            rules: [
              {
                type   : 'empty',
                prompt : '請選擇活動類型'
              }
            ]
          },
          field_position: {
            identifier: 'field_position',
            rules: [
              {
                type   : 'empty',
                prompt : '請選擇欄位'
              }
            ]
          },
          start_day: {
            identifier: 'start_day',
            rules: [
              {
                type   : 'empty',
                prompt : '請輸入開始日期'
              }
            ]
          },
          end_day: {
            identifier: 'end_day',
            rules: [
              {
                type   : 'empty',
                prompt : '請輸入結束日期'
              }
            ]
          },
          user_name: {
            identifier: 'user_name',
            rules: [
              {
                type   : 'empty',
                prompt : '請輸入聯絡人名稱'
              }
            ]
          },
          user_phone: {
            identifier: 'user_phone',
            rules: [
              {
                type   : 'empty',
                prompt : '請輸入聯絡人電話'
              }
            ]
          },
          user_email: {
            identifier: 'user_email',
            rules: [
              {
                type   : 'empty',
                prompt : '請輸入聯絡人電子信箱'
              }
            ]
          }
        }
      });

});