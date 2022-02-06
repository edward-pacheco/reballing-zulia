import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  display=false;
  message='';
  email:any;
  sent: boolean;

  constructor(private builder: FormBuilder) { 

    this.contactForm = this.builder.group({

      name: ['', Validators.compose([Validators.pattern('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$'), Validators.required])],
      subject: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      comments: ['', Validators.maxLength],

    })

  }

  ngOnInit(){

    setInterval(() => {
      localStorage.removeItem('email');
    }, 100000*60*24);

    if (localStorage.getItem('email')===this.email){
          
      this.message='Ya has enviado una solicitud.'
      this.sent=false;
      
    }else{
      this.sent=true;
    }

  }

  showModal(){

    this.message='Tu solicitud ha sido enviada.'
    this.display=!this.display;

  }

  enviar(values:any){

        this.email=values.email;
        localStorage.setItem('email', values.email);
        this.sent=false;
        
  }
  
}
