-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "tbl_groups" -----------------------------------
CREATE TABLE `tbl_groups`( 
	`id` Int( 0 ) AUTO_INCREMENT NOT NULL,
	`id_group` Text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`nama_group` Text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`created_at` Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` Timestamp NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 11;
-- -------------------------------------------------------------


-- CREATE TABLE "tbl_message" ----------------------------------
CREATE TABLE `tbl_message`( 
	`id` Int( 0 ) UNSIGNED AUTO_INCREMENT NOT NULL,
	`number` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`message` Text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`sender` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`status` LongText CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`desc` LongText CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 800;
-- -------------------------------------------------------------


-- CREATE TABLE "tbl_users" ------------------------------------
CREATE TABLE `tbl_users`( 
	`id` Int( 0 ) UNSIGNED AUTO_INCREMENT NOT NULL,
	`username` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`email` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`password` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`created_at` Timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` Timestamp NULL,
	`role` Enum( 'user', 'admin' ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 17;
-- -------------------------------------------------------------


-- CREATE TABLE "tbl_wa" ---------------------------------------
CREATE TABLE `tbl_wa`( 
	`id` Int( 0 ) UNSIGNED AUTO_INCREMENT NOT NULL,
	`userid` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`description` Text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`file` Text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`idwa` VarChar( 200 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 107;
-- -------------------------------------------------------------


-- Dump data of "tbl_groups" -------------------------------
BEGIN;

INSERT INTO `tbl_groups`(`id`,`id_group`,`nama_group`,`created_at`,`updated_at`) VALUES 
( '1', '6282165561175-1598343953@g.us', 'Cloud Games', '2021-06-04 00:00:00', '2021-06-04 00:00:00' );
COMMIT;
-- ---------------------------------------------------------


-- Dump data of "tbl_message" ------------------------------
BEGIN;

INSERT INTO `tbl_message`(`id`,`number`,`message`,`sender`,`status`,`desc`) VALUES 
( '2', '6282165561175@c.us', 'INI PESAN MEDIA', 'imamwasmawi', 'Sent', 'message' ),
( '106', 'imam@uma.ac.id', 'mmmm', 'whatsapp-session-mmmm.json', 'mmmm' );
COMMIT;
-- ---------------------------------------------------------


-- CREATE INDEX "index" ----------------------------------------
CREATE INDEX `index` USING BTREE ON `tbl_users`( `id` );
-- -------------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


