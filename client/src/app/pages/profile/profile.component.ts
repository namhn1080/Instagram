import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private AuthSV: AuthService) { }

  public user!: User;
  ngOnInit(): void {
    this.AuthSV.user$.subscribe(user => {
      this.user = user;
    })
  }
  detail(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' });
  }

}
