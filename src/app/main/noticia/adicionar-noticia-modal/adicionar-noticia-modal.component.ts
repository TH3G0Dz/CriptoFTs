import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder,  FormGroup,   Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-adicionar-noticia-modal',
  templateUrl: './adicionar-noticia-modal.component.html',
  styleUrls: ['./adicionar-noticia-modal.component.css']
})
export class AdicionarNoticiaModalComponent {
  AddNoticiaForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AdicionarNoticiaModalComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private mensagemService: MensagemService
  ) {
    this.AddNoticiaForm = this.formBuilder.group({
      Titulo: ['', Validators.required],
      Conteudo: ['', Validators.required],
      Data: ['', Validators.required],
      Autor: ['', Validators.required]
    });
  }

    AddNoticia(){
      if (this.AddNoticiaForm.valid) {
        const formData = new FormData();
        formData.append('Titulo', this.AddNoticiaForm.get('Titulo')?.value);
        formData.append('Conteudo', this.AddNoticiaForm.get('Conteudo')?.value);
        formData.append('Data', this.AddNoticiaForm.get('Data')?.value);
        formData.append('Autor', this.AddNoticiaForm.get('Autor')?.value);

        this.http.post(`${environment.ApiUrl}/noticia/AddNoticia`, formData).subscribe(
          (response) => {
            this.mensagemService.MensagemDeErro("Noticia Adicionada"+ response);
            this.dialogRef.close();
          },
          (error) => {
            this.mensagemService.MensagemDeErro("Falha ao adicionar noticia"+ error);
            this.dialogRef.close();          }
            );
          }
          this.mensagemService.MensagemDeErro("Falha ao adicionar noticia");
      }
}
