package com.ebac.modulo59;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

public class MainApp {
    public static void main(String[] args) {

        // Configura tu conexión MySQL
        String host = "localhost";
        int port = 3306;
        String db = "ebac_mod59";
        String user = "root";
        String pass = "root";

        MysqlConnection mysql = new MysqlConnection(host, port, db, user, pass);
        Contexto contexto = new Contexto(mysql);

        try (Connection conn = mysql.getConnection()) {

            // Verificar si existe usuario con id=1, si no crear uno
            int usuarioId = 1;
            try (PreparedStatement check = conn.prepareStatement("SELECT COUNT(*) FROM usuarios WHERE id = ?")) {
                check.setInt(1, usuarioId);
                try (ResultSet rs = check.executeQuery()) {
                    if (rs.next() && rs.getInt(1) == 0) {
                        try (PreparedStatement insert = conn.prepareStatement(
                                "INSERT INTO usuarios (nombre, apellido, email) VALUES ('Usuario', 'Demo', 'demo@example.com')")) {
                            insert.executeUpdate();
                            System.out.println("Usuario demo creado con id=1");
                        }
                    }
                }
            }

            // Crear y guardar nueva dirección
            DireccionModel direccion = new DireccionModel();
            direccion.setUsuarioId(usuarioId);
            direccion.setCalle("Av. Ejemplo");
            direccion.setCiudad("Cuernava");
            direccion.setEstado("Morelos");
            direccion.setCodigoPostal("32130");
            direccion.setPais("México");

            int newId = contexto.guardarDireccion(direccion);
            System.out.println("Dirección guardada con id = " + newId);

            // Obtener todas las direcciones (usa Statement)
            List<DireccionModel> direcciones = contexto.operacionConDirecciones();
            System.out.println("Lista de direcciones actuales:");
            direcciones.forEach(System.out::println);

            // Obtener dirección por ID
            DireccionModel encontrada = contexto.obtenerDireccionPorId(newId);
            if (encontrada != null) {
                System.out.println("Dirección obtenida por ID:");
                System.out.println(encontrada);
            }

            // Actualizar dirección
            encontrada.setCalle("Av. Actualizada");
            encontrada.setCiudad("Guadalajara");
            boolean actualizada = contexto.actualizarDireccion(encontrada);
            System.out.println("Dirección actualizada? " + actualizada);

            // Mostrar la dirección actualizada
            DireccionModel despues = contexto.obtenerDireccionPorId(newId);
            System.out.println("Dirección después de actualizar:");
            System.out.println(despues);

            // Eliminar dirección
            boolean eliminada = contexto.eliminarDireccion(newId);
            System.out.println("Dirección eliminada? " + eliminada);

            // Verificar que ya no exista
            DireccionModel revisa = contexto.obtenerDireccionPorId(newId);
            System.out.println("Existe después de eliminar? " + (revisa != null));

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}