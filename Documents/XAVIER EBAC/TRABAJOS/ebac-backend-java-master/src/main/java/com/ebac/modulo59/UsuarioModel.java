package com.ebac.modulo59;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class UsuarioModel {
    private Integer id;
    private String nombre;
    private String apellido;
    private String email;
    private LocalDateTime fechaCreacion;

    public UsuarioModel() {}

    public UsuarioModel(Integer id, String nombre, String apellido, String email, LocalDateTime fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.fechaCreacion = fechaCreacion;
    }

    // Getters y Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public LocalDateTime getFechaCreacion() { return fechaCreacion; }
    public void setFechaCreacion(LocalDateTime fechaCreacion) { this.fechaCreacion = fechaCreacion; }

    // Construir desde ResultSet
    public static UsuarioModel fromResultSet(ResultSet rs) throws SQLException {
        UsuarioModel u = new UsuarioModel();
        u.setId(rs.getInt("id"));
        u.setNombre(rs.getString("nombre"));
        u.setApellido(rs.getString("apellido"));
        u.setEmail(rs.getString("email"));
        java.sql.Timestamp ts = rs.getTimestamp("fecha_creacion");
        if (ts != null) u.setFechaCreacion(ts.toLocalDateTime());
        return u;
    }

    @Override
    public String toString() {
        return "UsuarioModel{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", email='" + email + '\'' +
                ", fechaCreacion=" + fechaCreacion +
                '}';
    }
}
