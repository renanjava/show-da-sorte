import React from 'react'
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Perfil: React.FC = () => {

    return (
    <div className="body">
        <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">
            Configurações da conta
        </h4>
        <div className="card overflow-hidden">
            <div className="row no-gutters row-bordered row-border-light">
                <div className="col-md-3 pt-0">
                    <div className="list-group list-group-flush account-settings-links">
                        <a className="list-group-item list-group-item-action active" data-toggle="list"
                            href="#account-general">Geral</a>
                        <a className="list-group-item list-group-item-action" data-toggle="list"
                            href="#account-change-password">Trocar Senha</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="account-general">
                            <hr className="border-light m-0"/>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">Usuário</label>
                                    <input type="text" className="form-control mb-1" value=""/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Nome Completo</label>
                                    <input type="text" className="form-control" value=""/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">E-mail</label>
                                    <input type="text" className="form-control mb-1" value=""/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Telefone</label>
                                    <input type="text" className="form-control" value=""/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="account-change-password">
                            <div className="card-body pb-2">
                                <div className="form-group">
                                    <label className="form-label">Senha atual</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Nova senha</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Repita a nova senha</label>
                                    <input type="password" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>    
                    </div>  
                    </div>  
                    </div>  

        <div className="text-right mt-3">
            <button type="button" className="btn btn-primary">Aplicar Mudanças</button>&nbsp;
            <button type="button" className="btn btn-default">Cancelar</button>
        </div>
    </div>
    </div>
       
    );
  };
  
  export default Perfil;