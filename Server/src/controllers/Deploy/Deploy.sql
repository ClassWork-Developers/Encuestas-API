-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Encuestas_API
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Encuestas_API
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Encuestas_API` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci ;
USE `Encuestas_API` ;

-- -----------------------------------------------------
-- Table `Encuestas_API`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Encuestas_API`.`Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(500) NOT NULL,
  `nombre` VARCHAR(500) NOT NULL,
  `clave` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Encuestas_API`.`Administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Encuestas_API`.`Administradores` (
  `idAdministradores` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(500) NOT NULL,
  `nombre` VARCHAR(500) NOT NULL,
  `clave` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idAdministradores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Encuestas_API`.`Encuestas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Encuestas_API`.`Encuestas` (
  `idEncuestas` INT NOT NULL AUTO_INCREMENT,
  `nombre_encuesta` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idEncuestas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Encuestas_API`.`preguntas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Encuestas_API`.`preguntas` (
  `idpreguntas` INT NOT NULL AUTO_INCREMENT,
  `id_encuesta` INT NOT NULL,
  `pregunta` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`idpreguntas`),
  INDEX `fk_encuestaa_idx` (`id_encuesta` ASC) VISIBLE,
  CONSTRAINT `fk_enc`
    FOREIGN KEY (`id_encuesta`)
    REFERENCES `Encuestas_API`.`Encuestas` (`idEncuestas`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Encuestas_API`.`Respuestas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Encuestas_API`.`Respuestas` (
  `idRespuesta` INT NOT NULL AUTO_INCREMENT,
  `id_pregunta` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  `id_encuesta` INT NOT NULL,
  `respuesta` VARCHAR(10000) NOT NULL,
  PRIMARY KEY (`idRespuesta`),
  INDEX `fk_pregunta` (`id_pregunta` ASC) VISIBLE,
  INDEX `fk_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_encuestaaaa_idx` (`id_encuesta` ASC) VISIBLE,
  CONSTRAINT `fk_encuesta1`
    FOREIGN KEY (`id_encuesta`)
    REFERENCES `Encuestas_API`.`Encuestas` (`idEncuestas`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_pregunta`
    FOREIGN KEY (`id_pregunta`)
    REFERENCES `Encuestas_API`.`preguntas` (`idpreguntas`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `Encuestas_API`.`Usuarios` (`idUsuarios`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
