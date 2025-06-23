<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'medical_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'MySQL-8.0' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#4D^^oPb,a~:$-{`,@htb`U.c*G@T<*8i]}vu~%NaecfL=^aLy])vJ&Ld$JlKa<Q' );
define( 'SECURE_AUTH_KEY',  '7I54frA/@Qo/lX[.l:J+>KnGC4u_0b-M<s&mZ-3R#w-=]|y0r`3?DOTmgvefG-z+' );
define( 'LOGGED_IN_KEY',    'B8ludYU^cwrk{tLThC4&Ihg`@(Sv da)0.1B+O4>Gb1]a|eu3^ZjWr5+4l:4}M]3' );
define( 'NONCE_KEY',        '@1f;4Io=F,**K;a>#aj[^X7jxIw7-&cvOKor0l&S{(7] @fv(nrd012uD8q8`N@i' );
define( 'AUTH_SALT',        'xyuWo9dB6K/ZA6<QwyRuw(mOStjUZ!wVsC1mak_xs:eu+s rr&0Kx.OLaGmUlM3p' );
define( 'SECURE_AUTH_SALT', '2v}Yt+{xq?y^*/V2wvhEZ?nP+4y6r1~%^+<}t%prd@4,@1vh_35_vTbDGb8Z0w{K' );
define( 'LOGGED_IN_SALT',   'l+a51n=.L[D(]Jq{w).y|S~#=7|,AL93r+|)ttfo<~d1wPj8GcaF|Jrf/Y*v5])P' );
define( 'NONCE_SALT',       ';W^RukBD?jcTqM!9Ek|YQOn[V}5p <~](V7:7SZ|6MuQ2ia%vm$ Or2X3B%[!e0-' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
