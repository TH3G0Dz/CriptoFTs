import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder,  FormGroup,   Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';
import { environment } from 'src/environments/environment.prod';
import { Noticia } from '../noticia/noticia';

@Component({
  selector: 'app-adicionar-noticia-modal',
  templateUrl: './adicionar-noticia-modal.component.html',
  styleUrls: ['./adicionar-noticia-modal.component.css']
})
export class AdicionarNoticiaModalComponent {
  AddNoticiaForm: FormGroup;
  noticia: Noticia;

  constructor(
    private dialogRef: MatDialogRef<AdicionarNoticiaModalComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private mensagemService: MensagemService,
    private usuarioService: UsuarioService

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

        this.noticia = {
          titulo: this.AddNoticiaForm.get('Titulo')?.value,
          conteudo: this.AddNoticiaForm.get('Conteudo')?.value,
          data: this.AddNoticiaForm.get('Data')?.value,
          autor: this.AddNoticiaForm.get('Autor')?.value
      }
      
      this.usuarioService.retornaUsuario().subscribe((response) => {
        this.noticia.usuario = response;
        console.log(response)
      })

        console.log(this.noticia)

        this.http.post(`${environment.ApiUrl}/noticia/AddNoticia`, this.noticia).subscribe(
          (response) => {
            this.mensagemService.MensagemDeErro("Noticia Adicionada" + response);
            this.dialogRef.close();
          },
          (error) => {
            this.mensagemService.MensagemDeErro("Falha ao adicionar noticia" + error);
            this.dialogRef.close();          }
            );
          }
          this.mensagemService.MensagemDeErro("Falha ao adicionar noticia");
      }
}
