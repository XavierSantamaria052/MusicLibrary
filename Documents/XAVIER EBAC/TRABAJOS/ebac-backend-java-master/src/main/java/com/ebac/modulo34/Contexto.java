package com.ebac.modulo34;

import com.ebac.modulo33.MysqlConnection;
import com.ebac.modulo34.dto.Direccion;
import com.ebac.modulo34.dto.Telefono;
import com.ebac.modulo34.dto.Usuario;
import com.ebac.modulo34.model.TelefonoModel;
import com.ebac.modulo34.model.UsuarioModel;

import java.sql.Connection;
import java.sql.SQLException;

public class Contexto {

    static Connection connection;

    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/modulo34";
        String user = "root";
        String password = "root";

        MysqlConnection mysqlConnection = new MysqlConnection();
        connection = mysqlConnection.getConnection(url, user, password);

        operacionConUsuarios();
        operacionConTelefonos();
        //operacionConDirecciones();

        connection.close();
    }

    public static void operacionConUsuarios() throws SQLException {
        System.out.println("------- OPERACION CON USUARIOS -------");
        Usuario usuarioMaria = crearUsuario("Maria", 25);
        Usuario usuarioJulian = crearUsuario("Julian", 23);

        UsuarioModel usuarioModel = new UsuarioModel(connection);
        Usuario maria = usuarioModel.guardar(usuarioMaria);
        Usuario julian = usuarioModel.guardar(usuarioJulian);

        System.out.println(maria);
        System.out.println(julian);
        System.out.println("-----------------------------------");

        Usuario usuario1EnDB = usuarioModel.obtenerPorId(1);
        System.out.println(usuario1EnDB);
        Usuario usuario2EnDB = usuarioModel.obtenerPorId(2);
        System.out.println(usuario2EnDB);
        System.out.println("-----------------------------------");

        Usuario usuarioInexistente = usuarioModel.obtenerPorId(3);
        System.out.println(usuarioInexistente);
        System.out.println("-----------------------------------");

        usuarioModel.eliminarPorId(2);
        Usuario usuario2Eliminado = usuarioModel.obtenerPorId(2);
        System.out.println(usuario2Eliminado);
    }


    public static void operacionConTelefonos() throws SQLException {
        System.out.println("------- OPERACION CON TELEFONOS -------");
        Telefono telefono = crearTelefono(1, "55-11111-22222", "Casa");

        TelefonoModel telefonoModel = new TelefonoModel(connection);
        telefonoModel.guardar(telefono);
        Telefono telefonoEnDB = telefonoModel.obtenerPorId(1);

        System.out.println(telefonoEnDB);
    }

    public static void operacionConDirecciones() {
            DireccionModel direccionModel = new DireccionModel();
    
    try (Connection conn = MysqlConnection.getConnection()) {
        System.out.println("== Iniciando operaciones con Direcciones ==");

        // Crear (Guardar)
        Direccion nuevaDireccion = new Direccion();
        nuevaDireccion.setUsuarioId(1); // asegura que exista usuario con id=1
        nuevaDireccion.setCalle("Av. Reforma 200");
        nuevaDireccion.setCiudad("CDMX");
        nuevaDireccion.setEstado("CDMX");
        nuevaDireccion.setCodigoPostal("12560");
        nuevaDireccion.setPais("México");

        int idGenerado = direccionModel.guardar(conn, nuevaDireccion);
        System.out.println("Dirección guardada con id = " + idGenerado);

        // Obtener (SELECT)
        Direccion direccionObtenida = direccionModel.obtenerPorId(conn, idGenerado);
        System.out.println("Dirección obtenida: " + direccionObtenida);

        // 🔹 3. Actualizar (UPDATE)
        direccionObtenida.setCalle("Av. Reforma 250");
        direccionObtenida.setCodigoPostal("12560");
        direccionModel.actualizar(conn, direccionObtenida);
        System.out.println("Dirección actualizada correctamente");

        // Verificar actualización
        Direccion direccionActualizada = direccionModel.obtenerPorId(conn, idGenerado);
        System.out.println("Dirección después de actualizar: " + direccionActualizada);

        // 🔹 4. Eliminar (DELETE)
        direccionModel.eliminar(conn, idGenerado);
        System.out.println("Dirección eliminada con id = " + idGenerado);

        // Verificar eliminación
        Direccion direccionEliminada = direccionModel.obtenerPorId(conn, idGenerado);
        if (direccionEliminada == null) {
            System.out.println("La dirección fue eliminada correctamente de la base de datos");
        } else {
            System.out.println("La dirección aún existe: " + direccionEliminada);
        }

        System.out.println("== Fin de operaciones con Direcciones ==");

    } catch (SQLException e) {
        System.err.println("Error al realizar operaciones con direcciones: " + e.getMessage());
        e.printStackTrace();
    }
}
    }

    private static Usuario crearUsuario(String nombre, int edad) {
        Usuario usuario = new Usuario();
        usuario.setNombre(nombre);
        usuario.setEdad(edad);

        return usuario;
    }

    private static Telefono crearTelefono(int idUsuario, String numero, String tipo) {
        Telefono telefono = new Telefono();
        telefono.setIdUsuario(idUsuario);
        telefono.setNumero(numero);
        telefono.setTipo(tipo);

        return telefono;
    }
}
