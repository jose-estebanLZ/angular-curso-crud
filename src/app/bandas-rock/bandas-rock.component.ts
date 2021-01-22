import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Band } from '../models/bandas-rock.models';
import { BandasRockService } from '../services/bandas-rock.service';

@Component({
  selector: 'app-bandas-rock',
  templateUrl: './bandas-rock.component.html',
  styleUrls: ['./bandas-rock.component.css']
})
export class BandasRockComponent implements OnInit {
  formLogin : FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder, private bands : BandasRockService, private route: ActivatedRoute, private router : Router) {
    this.formLogin = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      participants_number: ['', [Validators.required, Validators.min(3), Validators.max(8)]],
      songName: ['',[Validators.required, Validators.minLength(3)]],
      subgenre: ['', Validators.required]
    });

    this.route.params.subscribe(parameters => {
      if(parameters.id){
        console.log(parameters.id);
        this.id = parameters.id;

        this.bands.getSingleComputer(parameters.id).subscribe(res => {
          this.formLogin.get('name').setValue(res.name);
          this.formLogin.get('participants_number').setValue(res.participants_number);
          this.formLogin.get('songName').setValue(res.songName);
          this.formLogin.get('subgenre').setValue(res.subgenre);
        });
      }
    });
   }

  ngOnInit(): void {
  }

  loginClick(){
    const name = this.formLogin.get('name').value;
    const participants_number = this.formLogin.get('participants_number').value;
    const songName = this.formLogin.get('songName').value;
    const subgenre = this.formLogin.get('subgenre').value;

    console.log('Name: ', name);
    console.log('Participants number: ', participants_number);
    console.log('Song name: : ', songName);
    console.log('Subgenre: ', subgenre);
  }

  saveClick(){
    const data = new Band();
    data.name = this.formLogin.get('name').value;
    data.participants_number = this.formLogin.get('participants_number').value;
    data.songName = this.formLogin.get('songName').value;
    data.subgenre = this.formLogin.get('subgenre').value;

    if(this.id){
      this.bands.updateBand(this.id, data).subscribe(() =>{
        this.router.navigate(['list']);
      }, err =>{
        alert('Ocurrió un error al actualizar el elemento');
      });
    }else{
      this.bands.saveBand(data).subscribe(() =>{
        alert('Elemento guardado con éxito');
      }, err =>{
        alert('Ocurrió un error al insertar elemento');
      });
    }
  }

}
