<?php 
	/*
	Plugin Name: Manhattan
	Plugin URI: http://www.adchsm.me/manhattan/
	Description: A clean, lightweight and customisable CSS grid.
	Version: 1.0
	Author: Adam Charles Smith
	Author URI: http://www.adchsm.me/
	License: MIT
	License URL: http://www.adchsm.me/manhattan/license/
	*/
	
	/**
	 * Manhattan Plugin Index
	 *
	 * 001 - Initialisation
	 * 002 - TinyMCE
	 * 003 - Shortcodes
	 */
	
	/**
	 * 001 - Initialisation
	 */
	
	// Text domain
	function manhattan_text_domain() {
		load_plugin_textdomain( 'manhattan', false, basename( dirname( __FILE__ ) ) . '/lang' );
	}
	
	add_action( 'init', 'manhattan_text_domain' );
	
	// Localize script
	function manhattan_localization() { ?>
		<script type="text/javascript">
			var mhtnStrings = {
				'insert': '<?php _e( 'Insert', 'manhattan' ); ?>',
				
				'container': '<?php _e( 'Container', 'manhattan' ); ?>',
				'containerTitle': '<?php _e( 'Insert a Container', 'manhattan' ); ?>',
				'containerText': '<?php _e( 'Please select the style for this container.', 'manhattan' ); ?>',
				'containerNote': '<?php _e( 'Please note, containers are only for use on full width pages without sidebars or side navigation.', 'manhattan' ); ?>',
				'containerStyle': '<?php _e( 'Style', 'manhattan' ); ?>',
				'containerStyleContained': '<?php _e( 'Contained (default)', 'manhattan' ); ?>',
				'containerStyleFlex': '<?php _e( 'Flex', 'manhattan' ); ?>',
				'containerStyleEdge': '<?php _e( 'Edge', 'manhattan' ); ?>',
				
				'row': '<?php _e( 'Row', 'manhattan' ); ?>',
				
				'column': '<?php _e( 'Column', 'manhattan' ); ?>',
				'columnTitle': '<?php _e( 'Insert a Column', 'manhattan' ); ?>',
				'columnText': '<?php _e( 'Please select widths for this column at different screen sizes.', 'manhattan' ); ?>',
				'columnUnset': '<?php _e( 'Unset', 'manhattan' ); ?>',
				
				'clear': '<?php _e( 'Clear', 'manhattan' ); ?>',
				'clearTitle': '<?php _e( 'Insert a Clear', 'manhattan' ); ?>',
				'clearText': '<?php _e( 'Please select which screen sizes you would like this clear to be active at.', 'manhattan' ); ?>',
				'clearNote': '<?php _e( 'Insert this between columns that require clearing at certain screen sizes.', 'manhattan' ); ?>',
				
				'screenXs': '<?php _e( 'Extra small screens', 'manhattan' ); ?>',
				'screenSm': '<?php _e( 'Small screens', 'manhattan' ); ?>',
				'screenMd': '<?php _e( 'Medium screens', 'manhattan' ); ?>',
				'screenLg': '<?php _e( 'Large screens', 'manhattan' ); ?>',
				'screenXl': '<?php _e( 'Extra large screens', 'manhattan' ); ?>',
				
				'layouts': '<?php _e( 'Layouts', 'manhattan' ); ?>',
				'layout5050': '<?php _e( 'Two Columns: 50% - 50%', 'manhattan' ); ?>',
				'layout333333': '<?php _e( 'Three Columns: 33% - 33% - 33%', 'manhattan' ); ?>',
				'layout25252525': '<?php _e( 'Four Columns: 25% - 25% - 25% - 25%', 'manhattan' ); ?>',
				'layout2020202020': '<?php _e( 'Five Columns: 20% - 20% - 20% - 20% - 20%', 'manhattan' ); ?>',
				'layout7525': '<?php _e( 'Two Columns: 75% - 25%', 'manhattan' ); ?>',
				'layout2575': '<?php _e( 'Two Columns: 25% - 75%', 'manhattan' ); ?>',
				'layout6633': '<?php _e( 'Two Columns: 66% - 33%', 'manhattan' ); ?>',
				'layout3366': '<?php _e( 'Two Columns: 33% - 66%', 'manhattan' ); ?>',
				'layout502525': '<?php _e( 'Three Columns: 50% - 25% - 25%', 'manhattan' ); ?>',
				'layout255025': '<?php _e( 'Three Columns: 25% - 50% - 25%', 'manhattan' ); ?>',
				'layout252550': '<?php _e( 'Three Columns: 25% - 25% - 50%', 'manhattan' ); ?>'
			};
		</script>
	<?php }
	
	add_action( 'admin_head', 'manhattan_localization' );
	
	// Enqueue styles
	function manhattan_enqueue_styles() {
		wp_enqueue_style( 'manhattan', plugins_url() . '/manhattan/css/manhattan.css' );
	}
	
	// Themes which already use Manhattan do not require the additional stylesheet to be used.
	$theme = wp_get_theme();
	if ( ! $theme->get( 'Name' ) == 'Bisma' ) {
		add_action( 'wp_enqueue_scripts', 'manhattan_enqueue_styles' );
	}
	
	function manhattan_enqueue_admin_styles() {
		wp_enqueue_style( 'manhattan', plugins_url() . '/manhattan/css/manhattan-admin.css' );
	}
	
	add_action( 'admin_enqueue_scripts', 'manhattan_enqueue_admin_styles' );
	
	// Enqueue scripts
	function manhattan_enqueue_scripts() {
		wp_enqueue_script( 'manhattan', plugins_url() . '/manhattan/js/manhattan.js', array(), false, true );
	}
	
	add_action( 'wp_enqueue_scripts', 'manhattan_enqueue_scripts' );
	
	/**
	 * 002 - TinyMCE
	 */
	
	// Add button
	function manhattan_tinymce_add_button( $plugin_array ) {
	    $plugin_array['manhattan'] = plugins_url() . '/manhattan/js/manhattan-admin.js';
	    return $plugin_array;
	}
	
	add_filter( 'mce_external_plugins', 'manhattan_tinymce_add_button' );
	
	// Register button
	function manhattan_tinymce_register_button( $buttons ) {
		array_push( $buttons, 'manhattan' );
		return $buttons;
	}
	
	add_filter( 'mce_buttons', 'manhattan_tinymce_register_button');
	
	/**
	 * 003 - Shortcodes
	 */
	
	// Remove paragraph and break tags without filters
	function manhattan_remove_tags( $content ) {
		$tags = array(
			'<p>[' => '[',
			']</p>' => ']'
		);
		
		return strtr( $content, $tags );
	}
	
	// Container
	function manhattan_shortcode_container( $atts, $content = '' ) {
		$open_tag = '<div data-mhtn="container';
		
		if ( isset( $atts['type'] ) ) {
			$open_tag .= ' ' . $atts['type'] . '" class="js-mhtn-container';
		}
		
		return $open_tag . '">' . do_shortcode( manhattan_remove_tags( $content ) ) . '</div>';
	}

	add_shortcode( 'mhtn-container', 'manhattan_shortcode_container' );
	
	// Row
	function manhattan_shortcode_row( $atts, $content = '' ) {
		return '<div data-mhtn="row">' . do_shortcode( manhattan_remove_tags( $content ) ) . '</div>';
	}
	
	add_shortcode( 'mhtn-row', 'manhattan_shortcode_row' );
	
	// Column
	function manhattan_shortcode_column( $atts, $content = '' ) {
		$open_tag = '<div data-mhtn="col';
		
		if ( isset( $atts['xs'] ) ) {
			$open_tag .= ' xs-' . $atts['xs'];
		}
		
		if ( isset( $atts['sm'] ) ) {
			$open_tag .= ' sm-' . $atts['sm'];
		}
		
		if ( isset( $atts['md'] ) ) {
			$open_tag .= ' md-' . $atts['md'];
		}
		
		if ( isset( $atts['lg'] ) ) {
			$open_tag .= ' lg-' . $atts['lg'];
		}
		
		if ( isset( $atts['xl'] ) ) {
			$open_tag .= ' xl-' . $atts['xl'];
		}
		
		return $open_tag . '">' . do_shortcode( manhattan_remove_tags( $content ) ) . '</div>';
	}
	
	add_shortcode( 'mhtn-column', 'manhattan_shortcode_column' );
	
	// Clear
	function manhattan_shortcode_clear( $atts ) {
		$open_tag = '<div data-mhtn="clear';
		
		if ( in_array( 'xs', $atts ) ) {
			$open_tag .= ' xs';
		}
		
		if ( in_array( 'sm', $atts ) ) {
			$open_tag .= ' sm';
		}
		
		if ( in_array( 'md', $atts ) ) {
			$open_tag .= ' md';
		}
		
		if ( in_array( 'lg', $atts ) ) {
			$open_tag .= ' lg';
		}
		
		if ( in_array( 'xl', $atts ) ) {
			$open_tag .= ' xl';
		}
		
		return $open_tag . '"></div>';
	}
	
	add_shortcode( 'mhtn-clear', 'manhattan_shortcode_clear' );
?>