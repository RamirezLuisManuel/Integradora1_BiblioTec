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
CREATE TABLE Usuarios (
    Matricula INT PRIMARY KEY, -- Identificador único del usuario
    Nombre VARCHAR(25) NOT NULL, -- Nombre del usuario
    ApPaterno VARCHAR(50) NOT NULL, -- Apellido paterno del usuario
    ApMaterno VARCHAR(50) NOT NULL, -- Apellido materno del usuario
    Direccion VARCHAR(255) NOT NULL, -- Dirección del usuario
    Correo VARCHAR(100) NOT NULL, -- Correo electrónico del usuario
    Telefono VARCHAR(15) NOT NULL, -- Teléfono del usuario
    IdTipo INT, -- Identificador del tipo de usuario
    FOREIGN KEY (IdTipo) REFERENCES TipoUsuario(IdTipo),
    Contrasenia VARCHAR(16) NOT NULL, -- Contraseña del usuario
    StaUsuario VARCHAR(15) NOT NULL -- Estatus del usuario
);

-- Crear la tabla Libros
CREATE TABLE Libros (
<<<<<<< HEAD
    IdLibro VARCHAR(20) PRIMARY KEY, -- Código ISBN del libro
    Isbn VARCHAR(20) NOT NULL, -- Identificador del libro
    Titulo VARCHAR(255) NOT NULL, -- Título del libro
    Autor VARCHAR(100) NOT NULL, -- Autor del libro
    Tema VARCHAR(100) NOT NULL, -- Tema del libro
    Contenido VARCHAR(50) NOT NULL -- Contenido del libro
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
=======
    Id VARCHAR(20) NOT NULL PRIMARY KEY --'Identificador del libro',
    Isbn VARCHAR(20) NOT NULL-- 'Código ISBN del libro',
    Titulo VARCHAR(255) NOT NULL -- 'Título del libro',
    Autor VARCHAR(255) NOT NULL -- 'Autor del libro',
    Tema VARCHAR(255) NOT NULL -- 'Tema del libro',
    Tipo VARCHAR(255) NOT NULL -- 'Tipo de libro',
>>>>>>> 532601570c043b4748dfa52dd2f73bb1eac0beb3
);

-- Crear la tabla Prestamos
CREATE TABLE Prestamos (
    IdPrestamo INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único del préstamo
    Matricula INT, -- Número de control del préstamo
    IdLibro VARCHAR(20), -- Código ISBN del libro prestado
    FechaPrestamos TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha del préstamo
    FechaDevolucion DATE, -- Fecha de devolución del libro
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula),
    FOREIGN KEY (IdLibro) REFERENCES Libros(IdLibro)
);

-- Crear la tabla Inventario
CREATE TABLE Inventario (
<<<<<<< HEAD
    CodLibro INT PRIMARY KEY, -- Código único del libro en inventario
    IdLibro VARCHAR(20), -- Código ISBN del libro
    Cantidad INT NOT NULL, -- Cantidad de libros en inventario
    Matricula INT NOT NULL, -- Matricula del administrador
    Descripcion VARCHAR(255),
    Catnidad INT NOT NULL,
    Imagen VARCHAR(255),
    FOREIGN KEY (IdLibro) REFERENCES Libros(IdLibro),
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula)
=======
    Isbn VARCHAR(20)-- 'Código ISBN del libro',
    Cantidad INT NOT NULL -- 'Cantidad de libros en inventario',
    Descripcion TEXT -- 'Descripción del libro',
    FOREIGN KEY (Isbn) REFERENCES Libros(Isbn)
>>>>>>> 532601570c043b4748dfa52dd2f73bb1eac0beb3
);

-- Crear la tabla Multa
CREATE TABLE Multa (
    IdMulta INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único de la multa
    Monto DECIMAL(10, 2) NOT NULL, -- Monto de la multa
    Fecha DATE NOT NULL, -- Fecha de la multa
    Estatus VARCHAR(50) NOT NULL, -- Estatus de la multa
    IdPrestamo INT, -- Identificador del préstamo asociado a la multa
    FOREIGN KEY (IdPrestamo) REFERENCES Prestamos(IdPrestamo)
);

-- Crear la tabla Novedades
CREATE TABLE Novedades (
    IdNovedad INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único de la novedad
    Matricula INT, -- Matrícula del usuario que reporta la novedad
    NomEvent VARCHAR(255) NOT NULL, -- Nombre del evento
    FechaInicioEvent DATE NOT NULL, -- Fecha de inicio del evento
    FechaFinEvent DATE NOT NULL, -- Fecha de fin del evento
    DesEvent TEXT, -- Descripción del evento
    StaEvent VARCHAR(50) NOT NULL, -- Estatus del evento
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula)
);
