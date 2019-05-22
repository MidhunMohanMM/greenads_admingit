import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.css']
})
export class SendMessagesComponent implements OnInit {
    smsForm: FormGroup;
    radioStatus: any = false;
    routestypes: any;
    routype: any;
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    // mutiselect
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    userListShow: any = false;
    valide_number: any = [];
    sms_content: any;
  constructor(
private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // this.smsForm = this.formBuilder.group({
    //     username:  ['', [Validators.required]],
    //     password: ['', Validators.required]

    //   });
     axios.get('http://103.214.233.141:3003/v1/secure/routestypes')
    .then( res => {
        console.log(res);
        this.routestypes = res.data;
         })
    .catch( err => {
        console.log(err.data);
    });
  }
  onItemSelect(item: any) {
    console.log(item.phone);
    this.valide_number.push(item.phone);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  charcount(value) {
    $(document).ready(function() {
        var $remaining = $('#remaining'),
            $messages = $remaining.next(),
            $chartotal = $('#chartotal');
        $('#message').keyup(function() {
            var chars = value.length,
                messages = Math.ceil(chars / 160),
                remaining = messages * 160 - (chars % (messages * 160) || messages * 160),
                chartotal = chars;
            $remaining.text(' characters remaining :' + remaining  );
            $chartotal.text(' total character :' + chartotal);
            $messages.text(' messages :' + messages );
        });

    });
    }
    sendnow() {

        this.radioStatus = false;
    }
    schedule() {

        this.radioStatus = true;
    }
    navSelected(navName) {
        console.log(navName.target.value + 'Clicked!');
        // this.routype = navName.target.value;
    }
    userSelected(users) {
        console.log(users.target.value);
        axios.get('http://103.214.233.141:3003/v1/secure/users/contacts')
        .then( res => {
            console.log(res);
            this.dropdownList = res.data;
            this.dropdownSettings = {
                singleSelection: false,
                idField: 'phone',
                textField: 'name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 5,
                allowSearchFilter: true
              };
              this.userListShow = true;

            })
        .catch( err => {
            console.log(err.data);
        });
    }
    doSend() {
        if (!this.routype || !this.valide_number || !this.sms_content) {
            Swal.fire({
                position: 'top-end',
                type: 'error',
                title: 'SMS Not Sent',
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            console.log(this.routype);
            console.log(this.valide_number);
            const self = this;
            const sms_data = {
             'usersid': '1',
             'routestypesid': this.routype,
             'to': this.valide_number,
             'content': this.sms_content
            };
            console.log(sms_data);

            axios.post('http://103.214.233.141:3003/v1/secure/users/bulk/messages/send', sms_data
            ).then(function (res) {
              console.log(res);
              Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'SMS Sent',
                showConfirmButton: false,
                timer: 1500
              });
              self.sms_content = '';
              self.valide_number = [];
              self.userListShow = false;
            })
            .catch(function (error) {
              console.log(error);
            });
        }

        }


}
