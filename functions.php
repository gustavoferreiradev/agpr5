<?php
function clwp_postsbycategory() {
// Defino o Nome da Categoria e a Quantidade de Posts a serem exibidos
$the_query = new WP_Query( array( 'category_name' => 'Notícias', 'posts_per_page' => 4 ) ); 
  
 // O Loop
if ( $the_query->have_posts() ) {
 $string .= '<ul class="postsbycategory widget_recent_entries">';
 while ( $the_query->have_posts() ) {
 $the_query->the_post();
 if ( has_post_thumbnail() ) {
 $string .= '<li>';
 $string .= '<a href="' . get_the_permalink() .'" rel="bookmark">' . get_the_post_thumbnail($post_id, array( 50, 50) ) . get_the_title() .'</a></li>';
 } else { 
 // Se nenhuma imagem de destaque foi cadastrada, exibe apenas o título do post
 $string .= '<li><a href="' . get_the_permalink() .'" rel="bookmark">' . get_the_title() .'</a></li>';
 }
 }
 } else {
 // Nada será exibido se nenhum Post Relacionado por Categoria foi encontrado
}
$string .= '</ul>';
  
return $string;
 
/* Restaura os dados originais do post */
wp_reset_postdata();
}
// Adiciona um Shortcode
add_shortcode('categoryposts', 'clwp_postsbycategory');
 
// Ativa shortcodes em Widgets de Texto
add_filter('widget_text', 'do_shortcode');
?>