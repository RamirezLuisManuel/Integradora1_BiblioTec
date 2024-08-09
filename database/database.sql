-- Crear la base de datos
CREATE DATABASE Biblioteca;

-- Usar la base de datos creada
USE Biblioteca;

-- Crear la tabla TipoUsuario
CREATE TABLE TipoUsuario (
    IdTipo INT AUTO_INCREMENT PRIMARY KEY -- Identificador único del tipo de usuario,
    Descripcion VARCHAR(15) NOT NULL -- 'Descripción del tipo de usuario'
);

-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    Matricula INT PRIMARY KEY -- 'Identificador único del usuario',
    Nombre VARCHAR(25) NOT NULL -- 'Nombre del usuario',
    ApPaterno VARCHAR(255) NOT NULL -- 'Apellido paterno del usuario',
    ApMaterno VARCHAR(255) NOT NULL -- 'Apellido materno del usuario',
    Direccion VARCHAR(255) NOT NULL -- 'Dirección del usuario',
    Correo VARCHAR(255) NOT NULL -- 'Correo electrónico del usuario',
    Telefono VARCHAR(15) NOT NULL -- 'Teléfono del usuario',
    IdTipo INT -- 'Identificador del tipo de usuario',
    FOREIGN KEY (IdTipo) REFERENCES TipoUsuario(IdTipo),
    Contraseña VARCHAR(16) NOT NULL -- 'Contraseña del usuario',
    StaUsuario VARCHAR(15) NOT NULL -- 'Estatus del usuario'
);

-- Crear la tabla Libros
CREATE TABLE Libros (
    Isbn VARCHAR(20) PRIMARY KEY -- 'Código ISBN del libro',
    Id VARCHAR(20) NOT NULL --'Identificador del libro',
    Titulo VARCHAR(255) NOT NULL -- 'Título del libro',
    Autor VARCHAR(255) NOT NULL -- 'Autor del libro',
    Tema VARCHAR(255) NOT NULL -- 'Tema del libro',
    Descripcion TEXT -- 'Descripción del libro',
    Disponibilidad BOOLEAN NOT NULL -- 'Disponibilidad del libro',
    Tipo VARCHAR(255) NOT NULL -- 'Tipo de libro'
);

-- Crear la tabla Prestamos
CREATE TABLE Prestamos (
    IdPrestamo INT AUTO_INCREMENT PRIMARY KEY -- 'Identificador único del préstamo',
    NControl INT -- 'Número de control del préstamo',
    Isbn VARCHAR(20) -- 'Código ISBN del libro prestado',
    Fechaprestamos TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 'Fecha del préstamo',
    Fechadevolucion DATE -- 'Fecha de devolución del libro',
    FOREIGN KEY (NControl) REFERENCES Usuarios(Matricula),
    FOREIGN KEY (Isbn) REFERENCES Libros(Isbn)
);

-- Crear la tabla Inventario
CREATE TABLE Inventario (
    CodLibro INT  PRIMARY KEY -- 'Código único del libro en inventario',
    Isbn VARCHAR(20) -- 'Código ISBN del libro',
    Cantidad INT NOT NULL -- 'Cantidad de libros en inventario',
    FOREIGN KEY (Isbn) REFERENCES Libros(Isbn)
);

-- Crear la tabla Multa
CREATE TABLE Multa (
    IdMulta INT AUTO_INCREMENT PRIMARY KEY -- 'Identificador único de la multa',
    Monto DECIMAL(10, 2) NOT NULL -- 'Monto de la multa',
    Fecha DATE NOT NULL -- 'Fecha de la multa',
    Estatus VARCHAR(50) NOT NULL -- 'Estatus de la multa',
    IdPrestamo INT -- 'Identificador del préstamo asociado a la multa',
    FOREIGN KEY (IdPrestamo) REFERENCES Prestamos(IdPrestamo)
);

-- Crear la tabla Novedades
CREATE TABLE Novedades (
    IdNovedad INT AUTO_INCREMENT PRIMARY KEY -- 'Identificador único de la novedad',
    Matricula INT --'Matrícula del usuario que reporta la novedad',
    NomEvent VARCHAR(255) NOT NULL -- 'Nombre del evento',
    FechaInicioEvent DATE NOT NULL -- 'Fecha de inicio del evento',
    FechaFinEvent DATE NOT NULL -- 'Fecha de fin del evento',
    DesEvent TEXT -- 'Descripción del evento',
    StaEvent VARCHAR(50) NOT NULL -- 'Estatus del evento',
    FOREIGN KEY (Matricula) REFERENCES Usuarios(Matricula)
);
