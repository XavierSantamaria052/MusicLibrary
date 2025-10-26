package com.ebac.modulo59;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class DireccionModel {
    private Integer id;
    private Integer usuarioId;
    private String calle;
    private String ciudad;
    private String estado;
    private String codigoPostal;
    private String pais;
    private LocalDateTime fechaCreacion;

    public DireccionModel() {}

    public DireccionModel(Integer id, Integer usuarioId, String calle, String ciudad, String estado, String codigoPostal, String pais, LocalDateTime fechaCreacion) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.calle = calle;
        this.ciudad = ciudad;
        this.estado = estado;
        this.codigoPostal = codigoPostal;
        this.pais = pais;
        this.fechaCreacion = fechaCreacion;
    }

    // Getters / Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Integer getUsuarioId() { return usuarioId; }
    public void setUsuarioId(Integer usuarioId) { this.usuarioId = usuarioId; }
    public String getCalle() { return calle; }
    public void setCalle(String calle) { this.calle = calle; }
    public String getCiudad() { return ciudad; }
    public void setCiudad(String ciudad) { this.ciudad = ciudad; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    public String getCodigoPostal() { return codigoPostal; }
    public void setCodigoPostal(String codigoPostal) { this.codigoPostal = codigoPostal; }
    public String getPais() { return pais; }
    public void setPais(String pais) { this.pais = pais; }
    public LocalDateTime getFechaCreacion() { return fechaCreacion; }
    public void setFechaCreacion(LocalDateTime fechaCreacion) { this.fechaCreacion = fechaCreacion; }

    // Construir desde ResultSet
    public static DireccionModel fromResultSet(ResultSet rs) throws SQLException {
        DireccionModel d = new DireccionModel();
        d.setId(rs.getInt("id"));
        d.setUsuarioId(rs.getInt("usuario_id"));
        d.setCalle(rs.getString("calle"));
        d.setCiudad(rs.getString("ciudad"));
        d.setEstado(rs.getString("estado"));
        d.setCodigoPostal(rs.getString("codigo_postal"));
        d.setPais(rs.getString("pais"));
        java.sql.Timestamp ts = rs.getTimestamp("fecha_creacion");
        if (ts != null) d.setFechaCreacion(ts.toLocalDateTime());
        return d;
    }

    @Override
    public String toString() {
        return "DireccionModel{" +
                "id=" + id +
                ", usuarioId=" + usuarioId +
                ", calle='" + calle + '\'' +
                ", ciudad='" + ciudad + '\'' +
                ", estado='" + estado + '\'' +
                ", codigoPostal='" + codigoPostal + '\'' +
                ", pais='" + pais + '\'' +
                ", fechaCreacion=" + fechaCreacion +
                '}';
    }
}
