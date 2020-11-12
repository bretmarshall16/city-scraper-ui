import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {


  stats: any;
  displayedColumns: string[] = ['Rank', 'Player', 'School', 'total_goals',
  'total_assists', 'total', 'Goals_Per_Game', 'Percentage_Games_With_Goal'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  constructor(
    private route: ActivatedRoute,
    private nav: NavService
    ) { }

  ngOnInit() {
    this.stats = this.route.snapshot.data.data;
    this.dataSource = new MatTableDataSource(this.stats);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToPlayer(id: number): void {
    this.nav.goToPlayer(id);
  }

  goToSchool(id: number): void {
    this.nav.goToSchool(id);
  }

}
