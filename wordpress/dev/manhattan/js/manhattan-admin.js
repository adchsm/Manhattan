( function() {
	'use strict';

	tinymce.PluginManager.add( 'manhattan', function( editor, url ) {
		
		/**
		 * Add Manhattan Button
		 */
		
		editor.addButton( 'manhattan', {
			title: 'Manhattan',
			icon: 'icon manhattan-icon-tinymce',
			type: 'menubutton',
			menu: [
				{ // Shortcodes submenu
					text: mhtnStrings.insert,
					menu: [
						{
							text: mhtnStrings.container,
							onclick: function() {
								editor.windowManager.open( {
									title: mhtnStrings.containerTitle,
									body: [
										{
											type: 'container',
											html: '<p style="margin-bottom: 1em;">' + mhtnStrings.containerText + '<br><em>' + mhtnStrings.containerNote + '</em></p>'
										},
										{
											type: 'listbox',
											name: 'containerStyle',
											label: mhtnStrings.containerStyle,
											'values': [
												{ text: mhtnStrings.containerStyleContained, value: '' },
												{ text: mhtnStrings.containerStyleFlex, value: 'flex' },
												{ text: mhtnStrings.containerStyleEdge, value: 'edge' }
											]
										}
									],
									onsubmit: function( event ) {										
										// Open tag
										var openTag = '[mhtn-container';
										
										// Add container style
										if ( event.data.containerStyle !== '' ) {
											openTag += ' type="' + event.data.containerStyle + '"';
										}
										
										// Close tag
										openTag += ']';
										
										// Insert into the editor
										editor.insertContent( openTag + editor.selection.getContent() + '[/mhtn-container]' );
									}
								} );
							}
						},
						{
							text: mhtnStrings.row,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row]' + editor.selection.getContent() + '[/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.column,
							onclick: function() {
								editor.windowManager.open( {
									title: mhtnStrings.columnTitle,
									body: [
										{
											type: 'container',
											html: '<p style="margin-bottom: 1em;">' + mhtnStrings.columnText + '</p>'
										},
										{
											type: 'listbox',
											name: 'xsWidth',
											label: mhtnStrings.screenXs,
											'values': [
												{ text: '10%', value: '10' },
												{ text: '20%', value: '20' },
												{ text: '30%', value: '30' },
												{ text: '40%', value: '40' },
												{ text: '50%', value: '50' },
												{ text: '60%', value: '60' },
												{ text: '70%', value: '70' },
												{ text: '80%', value: '80' },
												{ text: '90%', value: '90' },
												{ text: '100%', value: '100' },
												{ text: '25%', value: '25' },
												{ text: '75%', value: '75' },
												{ text: '33%', value: '33' },
												{ text: '66%', value: '66' }
											],
											onPostRender: function() {
												this.value( '100' );
											}
										},
										{
											type: 'listbox',
											name: 'smWidth',
											label: mhtnStrings.screenSm,
											'values': [
												{ text: mhtnStrings.columnUnset, value: '' },
												{ text: '10%', value: '10' },
												{ text: '20%', value: '20' },
												{ text: '30%', value: '30' },
												{ text: '40%', value: '40' },
												{ text: '50%', value: '50' },
												{ text: '60%', value: '60' },
												{ text: '70%', value: '70' },
												{ text: '80%', value: '80' },
												{ text: '90%', value: '90' },
												{ text: '100%', value: '100' },
												{ text: '25%', value: '25' },
												{ text: '75%', value: '75' },
												{ text: '33%', value: '33' },
												{ text: '66%', value: '66' }
											],
											onPostRender: function() {
												this.value( '' );
											}
											
										},
										{
											type: 'listbox',
											name: 'mdWidth',
											label: mhtnStrings.screenMd,
											'values': [
												{ text: mhtnStrings.columnUnset, value: '' },
												{ text: '10%', value: '10' },
												{ text: '20%', value: '20' },
												{ text: '30%', value: '30' },
												{ text: '40%', value: '40' },
												{ text: '50%', value: '50' },
												{ text: '60%', value: '60' },
												{ text: '70%', value: '70' },
												{ text: '80%', value: '80' },
												{ text: '90%', value: '90' },
												{ text: '100%', value: '100' },
												{ text: '25%', value: '25' },
												{ text: '75%', value: '75' },
												{ text: '33%', value: '33' },
												{ text: '66%', value: '66' }
											],
											onPostRender: function() {
												this.value( '' );
											}
										},
										{
											type: 'listbox',
											name: 'lgWidth',
											label: mhtnStrings.screenLg,
											'values': [
												{ text: mhtnStrings.columnUnset, value: '' },
												{ text: '10%', value: '10' },
												{ text: '20%', value: '20' },
												{ text: '30%', value: '30' },
												{ text: '40%', value: '40' },
												{ text: '50%', value: '50' },
												{ text: '60%', value: '60' },
												{ text: '70%', value: '70' },
												{ text: '80%', value: '80' },
												{ text: '90%', value: '90' },
												{ text: '100%', value: '100' },
												{ text: '25%', value: '25' },
												{ text: '75%', value: '75' },
												{ text: '33%', value: '33' },
												{ text: '66%', value: '66' }
											],
											onPostRender: function() {
												this.value( '' );
											}
										},
										{
											type: 'listbox',
											name: 'xlWidth',
											label: mhtnStrings.screenXl,
											'values': [
												{ text: mhtnStrings.columnUnset, value: '' },
												{ text: '10%', value: '10' },
												{ text: '20%', value: '20' },
												{ text: '30%', value: '30' },
												{ text: '40%', value: '40' },
												{ text: '50%', value: '50' },
												{ text: '60%', value: '60' },
												{ text: '70%', value: '70' },
												{ text: '80%', value: '80' },
												{ text: '90%', value: '90' },
												{ text: '100%', value: '100' },
												{ text: '25%', value: '25' },
												{ text: '75%', value: '75' },
												{ text: '33%', value: '33' },
												{ text: '66%', value: '66' }
											],
											onPostRender: function() {
												this.value( '' );
											}
										},
									],
									onsubmit: function( event ) {									
										// Open tag
										var openTag = '[mhtn-column';
										
										// Extra small screens
										openTag += ' xs="' + event.data.xsWidth + '"';
										
										// Small screens
										if ( event.data.smWidth !== '' ) {
											openTag += ' sm="' + event.data.smWidth + '"';
										}
										
										// Medium screens
										if ( event.data.mdWidth !== '' ) {
											openTag += ' md="' + event.data.mdWidth + '"';
										}
										
										// Large screens
										if ( event.data.lgWidth !== '' ) {
											openTag += ' lg="' + event.data.lgWidth + '"';
										}
										
										// Extra large screens
										if ( event.data.xlWidth !== '' ) {
											openTag += ' xl="' + event.data.xlWidth + '"';
										}
										
										// Close tag
										openTag += ']';
										
										// Insert into the editor
										editor.insertContent( openTag + editor.selection.getContent() + '[/mhtn-column]' );
									}
								} );
							}
						},
						{
							text: mhtnStrings.clear,
							onclick: function() {
								editor.windowManager.open( {
									title: mhtnStrings.clearTitle,
									body: [
										{
											type: 'container',
											html: '<p style="margin-bottom: 1em;">' + mhtnStrings.clearText + '<br><em>' + mhtnStrings.clearNote + '</em></p>'
										},
										{
											name: 'clearXs',
											type: 'checkbox',
											text: mhtnStrings.screenXs
										},
										{
											name: 'clearSm',
											type: 'checkbox',
											text: mhtnStrings.screenSm
										},
										{
											name: 'clearMd',
											type: 'checkbox',
											text: mhtnStrings.screenMd
										},
										{
											name: 'clearLg',
											type: 'checkbox',
											text: mhtnStrings.screenLg
										},
										{
											name: 'clearXl',
											type: 'checkbox',
											text: mhtnStrings.screenXl
										}
									],
									onsubmit: function( event ) {
										// Opening tag
										editor.insertContent( '[mhtn-clear' );
										
										// Extra small screens
										if ( event.data.clearXs ) {
											editor.insertContent( ' xs');
										}
										
										// Small screens
										if ( event.data.clearSm ) {
											editor.insertContent( ' sm');
										}
										
										// Medium screens
										if ( event.data.clearMd ) {
											editor.insertContent( ' md');
										}
										
										// Large screens
										if ( event.data.clearLg ) {
											editor.insertContent( ' lg');
										}
										
										// Extra large screens
										if ( event.data.clearXl ) {
											editor.insertContent( ' xl');
										}
										
										// Closing tag
										editor.insertContent( ']' );
									}
								} );
							}
						},
					]
				},
				{ // Layouts Menu
					text: mhtnStrings.layouts,
					menu: [
						{
							text: mhtnStrings.layout5050,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="50"][/mhtn-column][mhtn-column xs="100" sm="50"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout333333,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="33"][/mhtn-column][mhtn-column xs="100" sm="33"][/mhtn-column][mhtn-column xs="100" sm="33"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout25252525,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][mhtn-clear sm][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout2020202020,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" md="20"][/mhtn-column][mhtn-column xs="100" md="20"][/mhtn-column][mhtn-column xs="100" md="20"][/mhtn-column][mhtn-column xs="100" md="20"][/mhtn-column][mhtn-column xs="100" md="20"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout7525,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="75"][/mhtn-column][mhtn-column xs="100" sm="25"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout2575,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="25"][/mhtn-column][mhtn-column xs="100" sm="75"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout6633,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="66"][/mhtn-column][mhtn-column xs="100" sm="33"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout3366,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="33"][/mhtn-column][mhtn-column xs="100" sm="66"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout502525,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" md="50"][/mhtn-column][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout255025,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" md="25"][/mhtn-column][mhtn-column xs="100" md="50"][/mhtn-column][mhtn-column xs="100" md="25"][/mhtn-column][/mhtn-row]' );
							}
						},
						{
							text: mhtnStrings.layout252550,
							onclick: function() {
								// Insert into the editor
								editor.insertContent( '[mhtn-row][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][mhtn-column xs="100" sm="50" md="25"][/mhtn-column][mhtn-clear sm][mhtn-column xs="100" md="50"][/mhtn-column][/mhtn-row]' );
							}
						},
					]
				}
			]
		} );

	} );
} ) ();