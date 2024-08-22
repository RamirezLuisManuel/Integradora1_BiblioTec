-- Crear la base de datos
CREATE DATABASE Biblioteca;

-- Usar la base de datos creada
USE Biblioteca;

-- Crear la tabla TipoUsuario
CREATE TABLE TipoUsuario (
    IdTipo INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único del tipo de usuario
    Descripcion VARCHAR(15) NOT NULL -- Descripción del tipo de usuario
);

-- Crear la tabla Usuarios
CREATE TABLE Usuario (
    Matricula INT PRIMARY KEY, -- Identificador único del usuario
    Nombre VARCHAR(25) NOT NULL, -- Nombre del usuario
    ApPaterno VARCHAR(50) NOT NULL, -- Apellido paterno del usuario
    ApMaterno VARCHAR(50) NOT NULL, -- Apellido materno del usuario
    Direccion VARCHAR(255) NOT NULL, -- Dirección del usuario
    Correo VARCHAR(100) NOT NULL, -- Correo electrónico del usuario
    Telefono VARCHAR(15) NOT NULL, -- Teléfono del usuario
    IdTipo INT, -- Identificador del tipo de usuario
    FOREIGN KEY (IdTipo) REFERENCES TipoUsuario(IdTipo),
    Contrasenia VARCHAR(255) NOT NULL, -- Contraseña del usuario encriptada
    StaUsuario VARCHAR(15) NOT NULL -- Estatus del usuario
);

-- Crear la tabla Libros
CREATE TABLE Libro (
    Isbn VARCHAR(20) PRIMARY KEY, -- Código ISBN del libro
    Titulo VARCHAR(255) NOT NULL, -- Título del libro
    Autor VARCHAR(100) NOT NULL, -- Autor del libro
    Tema VARCHAR(50) NOT NULL, -- Tema del libro
    Descripcion VARCHAR(255), -- Descripción del libro opcional
    Disponibilidad VARCHAR(15), -- Muestra si está disponible o no
    Contenido VARCHAR(50) NOT NULL, -- Contenido del libro
    TipoLibro VARCHAR(50) NOT NULL, -- Tipo al que pertenece
    ImagenLibro VARCHAR(255) NOT NULL, -- Imagen del libro
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de registro del libro
);

-- Crear la tabla Prestamos
CREATE TABLE Prestamo (
    IdPrestamo INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único del préstamo
    Matricula INT, -- Número de control del préstamo
    Isbn VARCHAR(20), -- Código ISBN del libro prestado
    FechaPrestamos TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha del préstamo
    FechaDevolucion DATE, -- Fecha de devolución del libro
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula) ON DELETE CASCADE,
    FOREIGN KEY (Isbn) REFERENCES Libros(Isbn) ON DELETE CASCADE
);

-- Crear la tabla Inventario
CREATE TABLE Inventario (
    CodLibro INT PRIMARY KEY, -- Código único del libro en inventario
    Isbn VARCHAR(20), -- Código ISBN del libro
    FOREIGN KEY (Isbn) REFERENCES Libros(Isbn) ON DELETE CASCADE
);

-- Crear la tabla Multa
CREATE TABLE Multa (
    IdMulta INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único de la multa
    Monto DECIMAL(10, 2) NOT NULL, -- Monto de la multa
    FechaInicio DATE NOT NULL, -- Fecha de la multa
    Estatus VARCHAR(50) NOT NULL, -- Estatus de la multa
    IdPrestamo INT, -- Identificador del préstamo asociado a la multa
    FOREIGN KEY (IdPrestamo) REFERENCES Prestamos(IdPrestamo) ON DELETE CASCADE
);

-- Crear la tabla Novedades
CREATE TABLE Novedad (
    IdNovedad INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único de la novedad
    Matricula INT, -- Matrícula del usuario que reporta la novedad
    NomEvent VARCHAR(255) NOT NULL, -- Nombre del evento
    FechaInicioEvent DATE NOT NULL, -- Fecha de inicio del evento
    FechaFinEvent DATE NOT NULL, -- Fecha de fin del evento
    DesEvent TEXT, -- Descripción del evento
    StaEvent VARCHAR(50) NOT NULL, -- Estatus del evento
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula) ON DELETE CASCADE
);

-- Crear el trigger para encriptar la contraseña antes de insertar un usuario
DELIMITER $$
CREATE TRIGGER before_insert_usuarios
BEFORE INSERT ON Usuario
FOR EACH ROW
BEGIN
    SET NEW.Contrasenia = SHA2(NEW.Contrasenia, 256);
END$$

DELIMITER $$

-- Crear el trigger para encriptar la contraseña antes de actualizar un usuario
CREATE TRIGGER before_update_usuarios
BEFORE UPDATE ON Usuario
FOR EACH ROW
BEGIN
    IF NEW.Contrasenia != OLD.Contrasenia THEN
        SET NEW.Contrasenia = SHA2(NEW.Contrasenia, 256);
    END IF;
END$$
DELIMITER ;
