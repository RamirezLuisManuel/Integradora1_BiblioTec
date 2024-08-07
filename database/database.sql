-- Crear la base de datos
CREATE DATABASE biblioteca;

-- Usar la base de datos creada
USE biblioteca;

-- Crear la tabla TipoUsuario
CREATE TABLE TipoUsuario (
    IdTipo INT AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(15) NOT NULL
);

-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    Matricula INT PRIMARY KEY,
    Nombre VARCHAR(25) NOT NULL,
    ApPaterno VARCHAR(255) NOT NULL,
    ApMaterno VARCHAR(255) NOT NULL,
    Direccion VARCHAR(255) NOT NULL,
    Correo VARCHAR(255) NOT NULL,
    Telefono VARCHAR(15) NOT NULL,
    IdTipo INT,
    FOREIGN KEY (IdTipo) REFERENCES TipoUsuario(IdTipo),
    Contraseña VARCHAR(16) NOT NULL,
    Estado VARCHAR(15) NOT NULL
);

-- Crear la tabla Libros
CREATE TABLE Libros (
    Isbn VARCHAR(20) PRIMARY KEY,
    Id VARCHAR(20) NOT NULL,
    Titulo VARCHAR(255) NOT NULL,
    Autor VARCHAR(255) NOT NULL,
    Tema VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    Disponibilidad BOOLEAN NOT NULL,
    Tipo VARCHAR(255) NOT NULL
);

-- Crear la tabla Prestamos
CREATE TABLE Prestamos (
    IdPrestamo INT AUTO_INCREMENT PRIMARY KEY,
    NControl INT,
    Isbn VARCHAR(20),
    Fechaprestamos TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Fechadevolucion DATE,
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula),
    FOREIGN KEY (Isbn) REFERENCES Libros(Isbn)
);

-- Crear la tabla Inventario
CREATE TABLE Inventario (
    CodLibro INT AUTO_INCREMENT PRIMARY KEY,
    Isbn VARCHAR(20),
    Cantidad INT NOT NULL,
    FOREIGN KEY (Isbn) REFERENCES Libros(Isbn)
);

-- Crear la tabla Multa
CREATE TABLE Multa (
    IdMulta INT AUTO_INCREMENT PRIMARY KEY,
    Monto DECIMAL(10, 2) NOT NULL,
    Fecha DATE NOT NULL,
    Estatus VARCHAR(50) NOT NULL,
    IdPrestamo INT,
    FOREIGN KEY (IdPrestamo) REFERENCES Prestamos(IdPrestamo)
);

-- Crear la tabla Novedades
CREATE TABLE Novedades (
    IdNovedad INT AUTO_INCREMENT PRIMARY KEY,
    Matricula INT,
    NomEvent VARCHAR(255) NOT NULL,
    FechaInicioEvent DATE NOT NULL,
    FechaFinEvent DATE NOT NULL,
    DesEvent TEXT,
    StaEvent VARCHAR(50) NOT NULL,
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula)
);

