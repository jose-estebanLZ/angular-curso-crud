import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Band } from '../models/bandas-rock.models';
import { BandasRockService } from '../services/bandas-rock.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns = ['_id','name', 'participants_number','songName', 'subgenre','actions'];
  dataSource = new MatTableDataSource<Band>();

  constructor(private bands: BandasRockService, private router: Router) {
    this.bands.getBands().subscribe(res =>{
      this.dataSource.data = res;
    })
   }

  ngOnInit(): void {
  }

  edit(id: string){
    this.router.navigate(['bandas-rock',id]);
  }

  delete(id: string){
    this.bands.deleteBand(id).subscribe(() => {
      this.refresh();
    }, err => {
      alert('Ocurrió un error al borrar el elemento');
    });
  }

  refresh(){
    this.bands.getBands().subscribe(res =>{
      this.dataSource.data = res;
    })
  }

}
