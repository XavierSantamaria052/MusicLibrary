package com.ebac.modulo59;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TelefonoModel {
    private Integer id;
    private Integer usuarioId;
    private String tipo;
    private String numero;

    public TelefonoModel() {}

    public TelefonoModel(Integer id, Integer usuarioId, String tipo, String numero) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.tipo = tipo;
        this.numero = numero;
    }

    // Getters y Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Integer getUsuarioId() { return usuarioId; }
    public void setUsuarioId(Integer usuarioId) { this.usuarioId = usuarioId; }
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public String getNumero() { return numero; }
    public void setNumero(String numero) { this.numero = numero; }

    public static TelefonoModel fromResultSet(ResultSet rs) throws SQLException {
        TelefonoModel t = new TelefonoModel();
        t.setId(rs.getInt("id"));
        t.setUsuarioId(rs.getInt("usuario_id"));
        t.setTipo(rs.getString("tipo"));
        t.setNumero(rs.getString("numero"));
        return t;
    }

    @Override
    public String toString() {
        return "TelefonoModel{" +
                "id=" + id +
                ", usuarioId=" + usuarioId +
                ", tipo='" + tipo + '\'' +
                ", numero='" + numero + '\'' +
                '}';
    }
}

