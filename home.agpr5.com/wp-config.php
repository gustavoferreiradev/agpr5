<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações
// com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'jupiter');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'jupiter');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'J#u557Y');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9RIU/QIce_`|Iow:iF%ianMdP7LKXtt6k*)b>cyj#x%VH,.b%s*C0XY!UeU]FWIR');
define('SECURE_AUTH_KEY',  'W.G(JeG>;0}p,AMFe-mYiIe;v7Y_R~BF@p*bmwAO<:3he=u$|~oex<E/0)yrfoy7');
define('LOGGED_IN_KEY',    'VCm;qoR0[f4riiF@7Q9Y8!diOp@iuhW_i&!($Bhm4):+0uBDu}*Tm+</3+JnfO8N');
define('NONCE_KEY',        'a8ld3P}8AuBbOO{Z+tPtR`&vJ!VSaM/5[{.T0[&;Ki![jY%N6yfcm<6+Xh<Er`Kn');
define('AUTH_SALT',        '@-GERj&;r1D`zi)i[e,27)l*Ddj90Eu /f)Th8K8^4a5r(BDPZW`MEk5t-[l] #T');
define('SECURE_AUTH_SALT', 'V1ZuvH:h>fcWf-brZ!)UHGK2?Io![:TGRIQd9=1)rrhjc(d}#=zfC9UT*,rEH+`z');
define('LOGGED_IN_SALT',   'LJlaC(;{sj(9ARltK9m/L#azLhx~!t+/]]?9:lIq6gRq)z+=`,9q@u]5uR;~rmn)');
define('NONCE_SALT',       'Cb~uzpS?d_M}_.scF7|u^B0><K?uP/q+cVuBr#3/pBX [Y~g`Ms>ky2XF!K0*zqs');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'agpr5';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD','direct');
