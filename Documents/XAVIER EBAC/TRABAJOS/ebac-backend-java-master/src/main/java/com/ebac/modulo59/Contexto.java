package com.ebac.modulo59;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class Contexto {

    private final MysqlConnection mysqlConnection;

    public Contexto(MysqlConnection mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
    }

    // Método que ejemplifica el uso de Statement para SELECT
    public List<DireccionModel> operacionConDirecciones() throws SQLException {
        List<DireccionModel> resultado = new ArrayList<>();
        String select = "SELECT id, usuario_id, calle, ciudad, estado, codigo_postal, pais, fecha_creacion FROM direcciones";

        try (Connection conn = mysqlConnection.getConnection();
                Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(select)) {   // uso de Statement para SELECT
            while (rs.next()) {
                resultado.add(DireccionModel.fromResultSet(rs));
            }
        }
        return resultado;
    }

    // Guardar nueva direccion (PreparedStatement para seguridad)
    public int guardarDireccion(DireccionModel d) throws SQLException {
        String insert = "INSERT INTO direcciones (usuario_id, calle, ciudad, estado, codigo_postal, pais) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = mysqlConnection.getConnection();
                PreparedStatement ps = conn.prepareStatement(insert, Statement.RETURN_GENERATED_KEYS)) {
            ps.setInt(1, d.getUsuarioId());
            ps.setString(2, d.getCalle());
            ps.setString(3, d.getCiudad());
            ps.setString(4, d.getEstado());
            ps.setString(5, d.getCodigoPostal());
            ps.setString(6, d.getPais());
            int affected = ps.executeUpdate();
            if (affected == 0) return -1;
            try (ResultSet keys = ps.getGeneratedKeys()) {
                if (keys.next()) {
                    int id = keys.getInt(1);
                    d.setId(id);
                    return id;
                }
            }
        }
        return -1;
    }

    // Actualizar direccion por id
    public boolean actualizarDireccion(DireccionModel d) throws SQLException {
        if (d.getId() == null) throw new IllegalArgumentException("Id es null");
        String update = "UPDATE direcciones SET calle = ?, ciudad = ?, estado = ?, codigo_postal = ?, pais = ? WHERE id = ?";
        try (Connection conn = mysqlConnection.getConnection();
                PreparedStatement ps = conn.prepareStatement(update)) {
            ps.setString(1, d.getCalle());
            ps.setString(2, d.getCiudad());
            ps.setString(3, d.getEstado());
            ps.setString(4, d.getCodigoPostal());
            ps.setString(5, d.getPais());
            ps.setInt(6, d.getId());
            int affected = ps.executeUpdate();
            return affected > 0;
        }
    }

    // Eliminar direccion por id
    public boolean eliminarDireccion(int id) throws SQLException {
        String delete = "DELETE FROM direcciones WHERE id = ?";
        try (Connection conn = mysqlConnection.getConnection();
                PreparedStatement ps = conn.prepareStatement(delete)) {
            ps.setInt(1, id);
            int affected = ps.executeUpdate();
            return affected > 0;
        }
    }

    // Obtener una direccion por id (usa PreparedStatement)
    public DireccionModel obtenerDireccionPorId(int id) throws SQLException {
        String select = "SELECT id, usuario_id, calle, ciudad, estado, codigo_postal, pais, fecha_creacion FROM direcciones WHERE id = ?";
        try (Connection conn = mysqlConnection.getConnection();
                PreparedStatement ps = conn.prepareStatement(select)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return DireccionModel.fromResultSet(rs);
                }
            }
        }
        return null;
    }
}
