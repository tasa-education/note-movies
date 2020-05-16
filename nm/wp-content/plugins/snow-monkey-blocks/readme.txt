=== Snow Monkey Blocks ===
Contributors: inc2734, mayukojpn, livevalue, kmix39, kngsmym, kokuboyuki
Donate link: https://www.amazon.co.jp/registry/wishlist/39ANKRNSTNW40
Tags: gutenberg, block, blocks, editor, gutenberg blocks, page builder, landing page, microcopy, steps, call to action
Requires at least: 5.4
Tested up to: 5.4
Stable tag: 8.3.1
Requires PHP: 5.6
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Gutenberg blocks collection made by MonkeyWrench.

== Description ==

Snow Monkey Blocks is a collection of content blocks for <a href="https://wordpress.org/plugins/gutenberg/" target="_blank">Gutenberg</a>. With using this plugin, you can create and publish landing pages or highly designed page quickly and easily. Of course, you don't need to write any code.

With Snow Monkey Blocks, you add blocks such as features, checklists, FAQs, steps, testimonials, CTA to <a href="https://wordpress.org/plugins/gutenberg/" target="_blank">Gutenberg</a> and quickly and easily launch responsive landing pages without programming knowledge.

Snow Monkey Blocks is optimized for the <a href="https://snow-monkey.2inc.org/" target="_blank">Snow Monkey</a> theme, but it can also be used with other themes. With using <a href="https://snow-monkey.2inc.org/" target="_blank">Snow Monkey</a> and this plugin together, output will be perfect designed and will be same view of edit screen.

https://www.youtube.com/watch?v=uD6omb4TLdA&t=283s

= Module blocks =

* Alert
* Balloon
* Box
* Button
* Button box (Button with microcopy)
* FAQ
* Icon list
* Pricing table
* Rating box
* Step
* Testimonial
* Items
* Slider
* Panels
* Media text
* Thumbnail gallery
* Recent posts (Can be used only with Snow Monkey)
* Taxonomy posts (Can be used only with Snow Monkey)
* Pickup slider (Can be used only with Snow Monkey)
* Categories list
* Contents outline (Can be used only with Snow Monkey)
* Evaluation star
* Child pages (Can be used only with Snow Monkey)
* Accordion
* Limited datetime
* Countdown timer
* Directory structure
* Container
* Price menu

= Section blocks =

By default these blocks are restricted. If you are using the theme that has 1 column template, you can activate these blocks using filter hooks.

* Section
* Section with background image
* Section with background video
* Section (Break the grid)
* Section (Side heading)

= Formatter =

* Text highlighter
* Text badge
* Format clear button

== Installation ==

This plugin can be installed directly from your site.

1. Log in and navigate to Plugins → Add New.
1. Type “Snow Monkey Blocks” into the Search and hit Enter.
1. Locate the Snow Monkey Blocks plugin in the list of search results and click Install Now.
1. Once installed, click the Activate link.

== Frequently Asked Questions ==

= Can Snow Monkey Blocks be used with any theme? =

Yes! You can use Snow Monkey Blocks with any theme, but we recommend using our <a href="https://snow-monkey.2inc.org/" target="_blank">Snow Monkey</a> theme for the best presentation. Other themes may require adjustment of margin between blocks.

== Screenshots ==

1. Alert blocks
2. Balloon blocks
3. Box block (Color can be set freely)
4. Button block (Color can be set freely)
5. Button box block (Color can be set freely)
6. FAQ block (The number of FAQ sets can be increased or decreased freely)
7. Icon list block
8. Pricing table block (The number of columns can be increased or decreased freely)
9. Rating box block (The number of ratings can be increased or decreased freely)
10. Step block (The number of steps can be increased or decreased freely)
11. Testimonial block (The number of items can be increased or decreased freely)
12. Items block (The number of items can be increased or decreased freely)
13. Slider block (The number of images can be increased or decreased freely)
14. Panel block (The number of items can be increased or decreased freely)
15. Media text block
16. Thumbnail gallery block (The number of images can be increased or decreased freely)
17. Categories list block
18. Evaluation star block
19. Accordion block
20. Limited datetime block (The number of items can be increased or decreased freely)
21. Countdown timer block
22. Directory structure block (The number of items can be increased or decreased freely)
23. Price menu block (The number of items can be increased or decreased freely)

== Changelog ==

= 8.3.1 =
* [Items] Layout is broken when text link is set in the text of "Contents" while "Link" is set.
* [Items] Change HTML structure.

= 8.3.0 =
* [Items] Add image size option.
* [Media text] Add image size option.
* [Panels] Add image size option.
* [Pricing table] Add image size option.
* [Section (Break the grid)] Add image size option.
* [Slider] Add image size option.
* [Step] Add image size option.
* [Thumbnail gallery] Add image size option.

= 8.2.4 =
* [Slider] Fixed a bug that the image is displayed in the size when it is smaller than the screen size.

= 8.2.3 =
* [Slider] Fixed a bug with a subtle gap at the bottom.
* [Slider] Fixed a bug that a large margin may appear at the bottom when displaying multiple images.

= 8.2.2 =
* [Limited datetime] Fixed a bug that end date is not reflected.
* [Recent posts] Fixed so that false clicks do not occur in the editor.
* [Taxonomy posts] Fixed so that false clicks do not occur in the editor.

= 8.2.1 =
* [Section] Reverse background position setting.
* [Section] Divider into background.

= 8.2.0 =
* Require Snow Monkey v10.1.1 or later.
* [Section] Add background potision setting.
* [Section break the grid] You can now insert videos.
* [Each sections] Add subtitle and lede settings.

= 8.1.0 =
* [Media text] You can now insert videos.
* Add some block templates.
* [Section with background video] Rename to "Section with background YouTube video"

= 8.0.2 =
* Change link and btn setting UI. Popover to toolbar.

= 8.0.1 =
* Change link and btn setting UI.
* Fix image setting UI.

= 8.0.0 =
* WordPress 5.4 compatible

= 7.4.1 =
* Minor refactoring of code.

= 7.4.0 =
* [Accordion] Fixed a bug that TwentyTwenty could not open / close.
* [Recent posts] You can set the text to be displayed when there is no matching post.
* [Taxonomy posts] You can set the text to be displayed when there is no matching post.
* Add filter hook `snow_monkey_blocks_taxonomy_posts_no_posts_text`
* Add filter hook `snow_monkey_blocks_recent_posts_no_posts_text`

= 7.3.5 =
* [Recent posts] Add layout Panels.
* [Taxonomy posts] Add layout Panels.
* [Button box] Changed to keep button label placeholder.
* [Button] Changed to keep button label placeholder.
* [Item (Standard)] Changed to keep button label placeholder.
* [Item (Block link)] Changed to keep button label placeholder.
* [Pricing table] Changed to keep button label placeholder.

= 7.3.4 =
* [Slider] Fix autoplay bug.
* [Thumbnail slider] Fix autoplay bug.

= 7.3.3 =
* Update categories list block styles.

= 7.3.2 =
* Update browserslist. Using @wordpress/browserslist-config

= 7.3.1 =
* Changed some blocks to appear in excerpts.

= 7.3.0 =
* [Like me box] Add Like me box block.

= 7.2.8 =
* [Contents outline] Fixed a bug that the order was not correct when multiple selectors were specified.

= 7.2.7 =
* Adjust the design with a relaxed and bright overall.
* [Alert] Add remark pattern.

= 7.2.6 =
* Removed color change effect when hovering over button.

= 7.2.5 =
* [Panel (horizontal)] Fixed a bug that images were not stuck exactly up and down on the editor.
* [Media text] Add caption setting.

= 7.2.4 =
* Fix IE11 JS error.

= 7.2.3 =
* [Btn box] Fix ghost style bug.
* [Btn] Fix ghost style bug.
* Organizing color settings panels.

= 7.2.2 =
* Fixed bugs in the editor CSS.

= 7.2.1 =
* Refactoring loading proccess of CSS for editor.

= 7.2.0 =
* [Section] Extends divier level
* [Secion side heading] Extends divier level

= 7.1.1 =
* [Contents Outline] Fix anchor setting bug. (Requires Snow Monkey Theme 8.4.1 or later)
* [Banner] Fixed a bug where blocks are broken when clearing and saving color settings.

= 7.1.0 =
* [Contents Outline] Add anchor setting.
* [Section with background image] Add image settings for each breakpoints.
* [Section side heading] Add heading position setting.
* Add example for each blocks. And remove blocks screenshot in sidebar.

= 7.0.0 =
* Change how each block is read according to the gutenberg handbook.
* [Pickup slider] Added setting for maximum display number (Requires Snow Monkey Theme 8.2.0 or later).

= 6.0.1 =
* [FAQ] Fix bug that the question can not input on editor.

= 6.0.0 =
* Requires WordPress 5.3 or later

= 5.2.1 =
* [Pricing table] Fix bug that column size not refrected on editor.
* [Alert] Transforms from paragraph.

= 5.2.0 =
* [Media text] Add image link setting.
* [Directory structure] Fix bug that icon is not displayed on editor.
* [Badge] Fixed a bug that pop-up does not open even when the cursor is hovered.
* WordPress 5.3 compatibility.

= 5.1.0 =
* [Pickup Slider] Add HTML anchor setting.
* [Pickup Slider] Add filter hook `inc2734_wp_awesome_widgets_pickup_slider_widget_args_<id>`

= 5.0.1 =
* Requires at least: 5.2
* Change APIs path.
* [Highlighter] Bug fix.
* [Badge] Bug fix.

= 5.0.0 =
* Refactoring
* Change protocol of maxresdefault.jpg http to htttps.

= 4.12.0 =
* Add format clear button.
* Fix FAQ 1 block template bug.
* Fix Pricing table 1 block template bug.
* Refactoring block template inserter.

= 4.11.1 =
* [FAQ] Add anchor setting.
* [Badge] Adjusting the vertical position display. Multiple lines are no longer allowed.
* [Step] Can convert child blocks of steps.
* [Step] Changed default child block to free input version.

= 4.11.0 =
* [Banner] Fixed a bug that the block is broken when the subtitle is saved.
* [Child pages] Add title setting.
* Added processing to avoid duplication of block categories

= 4.10.0 =
* Add text badge format.
* [Step] Add anchor setting.
* [Media text] Add anchor setting.

= 4.9.1 =
* [Items] Add banner block.

= 4.8.0 =
* [Media text] Add title tag setting.

= 4.7.0 =
* [Panels] Fixed a bug that the display width of the image differs depending on the content even if the same image is used.
* [Sections] Add h1 to title tag setting.
* [Slider] Add "slide to show" and "slide to scroll" setting for mobiles.

= 4.6.0 =
* [Sections] Add wrapper tag setting.

= 4.5.1 =
* [Slider] Fix bug that caused the link to fire when clicking on the image in the editor.

= 4.5.0 =
* [FAQ] The answer changed to free entry.
* [Slider] Add link url/target setting.
* Fix bug that there is no bottom margin of thumbnail gallery/slider block on editor.

= 4.4.0 =
* Add the Price menu block.
* Add the Section side heading block.
* Fix bug that container width shifts when making the section block wide/full width in editor.
* Fix bug that margin may be created on the right side of the image of the horizontal panel block on E11.

= 4.3.1 =
* [Pricing table] Fix layout broken on the smartphone.
* [Pricing table] Added column size settings for PC and tablet.

= 4.3.0 =
* Add Section (Break the grid) block.
* [Section] Refactoring gradation panel.
* [Section with background image] Refactoring gradation panel.
* [Section with background video] Refactoring gradation panel.

= 4.2.0 =
* [Section] Add text color setting.

= 4.1.0 =
* [Section] Add background color gradation settings.
* [Section with background image] Add background mask color gradation settings.
* [Section with background image] Fix bug that output blank img tag when background image is not set.
* [Section with background video] Add background mask color gradation settings.

= 4.0.1 =
* [Section] Fixed a bug that broke the block when setting the slim width.

= 4.0.0 =
* Add block template feature.
* Add container block.
* Merge `is_pro()` and `is_snow_monkey()`.
* [Thumbnail gallery] Add caption setting.
* [Section (with background image/background video)] Add content width setting.
* [Contents outline] Add "move to before first heading" setting.
* [Testimonial] Add columns setting
* [Step] Abolish child block insertion restriction.
* [Step] Add free input child block.

= 3.7.0 =
* [Pricing table] Add horizontal scroll on tablet/PC.
* [Section with background image] Fix bug that parallax effect is not applied.
* [Panels] Add none option to titleTag setting.
* [Items] Add none option to titleTag setting.
* [Section] Add titleTag setting.

= 3.6.0 =
* Add countdown timer block.
* Add directory structure block.

= 3.5.4 =
* [Balloon] Change design.
* Update ja translations.

= 3.5.3 =
* [Taxonomy posts] Fixed a bug that "No posts found" is displayed on the editor when selecting a parent category.
* Change block icons color.

= 3.5.2 =
* [Taxonomy posts] Fixed a bug that "No posts found" is displayed on the editor when selecting a parent category.
* [FAQ] Make Q and A changeable.
* [Section background image/video] Fixed bug that blocks will be broken when you clear the mask color.
* Fix image to reflect alt attribute.
* Change block icons color.

= 3.5.1 =
* [Button] Fixed the bug that alignment setting is not reflected on editor.

= 3.5.0 =
* [Button] Add styles setting.
* [Button box] Add styles setting.

= 3.4.1 =
* [Section with background video] Changed to display thumbnail instead of video for mobile.

= 3.4.0 =
* Fix vertical margin of some blocks.
* Fix bug that the input probrem at the spotlight mode.
* Add description of blocks.
* Add fade setting to the slider block.

= 3.3.0 =
* Add limited datetime block.
* Add toggle arrow to the accordion block.
* Refactoring category list block.

= 3.2.1 =
* Refactoring taxonomy posts block.
* Refactoring recent posts block.

= 3.2.0 =
* Add taxonomy posts block. This block working on Snow Monkey v5.4.7
* Add post type setting to the recent posts block.

= 3.1.6 =
* Add id to the recent posts block. So you can use `snow_monkey_recent_posts_widget_args_<id>` hook.

= 3.1.5 =
* Fix notice error at className of dynamic blocks.

= 3.1.4 =
* Fix bug that broken dynamic blocks when set custom class name.

= 3.1.3 =
* Add anchor setting to the section with background image block and the section with background video block.

= 3.1.2 =
* Deprecated the items > item block.
* Add the items > item (standard) block.
* Add the items > item (block link) block.

= 3.1.0 =
* Add the section with background video block.
* Add arrow setting to the thumbnail gallery block.
* Add ignore sticky posts setting to the related posts block.
* Apply masonry layout to the category list block on editor.

= 3.0.10 =
* Fixed bug that the block toolbar was not fixed.
* Fixed bug that blocks containing link elements are broken.
* Refactoring slider block.
* Refactoring thumbnail gallery block.

= 3.0.9 =
* Fixed bug that image of panel block (landscape) shrinks on IE11
* Fixed bug that layout of the section (with background image) block collapses on IE11
* Fixed bug that layout of the slider block collapses on IE11
* Fixed bug that layout of the step block collapses on IE11
* Fixed bug that accordion block does not work correctly on IE11

= 3.0.8 =
* Fix bug that setting of right image is not reflected in the step block.
* Change URL input from TextControl to URLInput.
* Add display order settings to the category list block.

= 3.0.7 =
* Add exclude feature to the category list block.

= 3.0.6 =
* Allow mutual conversion of child blocks of the item block.
* Changed to display child block addition button of repeatable blocks.
* Fix to reflect additional CSS class setting when editing.

= 3.0.5 =
* Add horizontal panel item.

= 3.0.4 =
* Fix duplicate slash in file path.
* Changed so that you can reconfigure without deleting the image.
* Removed unneed files.

= 3.0.3 =
* Fixed bug that the contents outline heading restrictions are not reflected.
* The item summary of the step block to InnerBlocks.
* The item of items block is supported block link.
* Add a simple layout with only text display on recent post block.

= 3.0.2 =
* Changed to add padding that is same of level of divider when section divider set.

= 3.0.1 =
* Fix bug that the accordion block and the child pages block not working on Snow Monkey v4
* Fix bug that title of the section block can not be changed.

= 3.0.0 =
* Add the accordion block.
* Add the child pages block.
* Add parallax setting to the section with background image block.
* Add text color setting to the section with background image block.
* Add item title tag setting to the panel block and the items block.
* Add anchor setting to the section block.
* Fix the categories list block styles on mobile.
* Refactoring repeatable blocks.
* Refactoring color settings panel.

= 2.1.0 =
* Add the categories list block.
* Add the content outline block.
* Add the evaluation star block.
* Fix RangeControl bug.

= 2.0.0 =
* Fixed bug that the recent post blocks are not displayed in Snow Monkey v5.
* If the position of the image in the media text block is on the left side, on the smartphone, change the image so that the image is displayed at the top.
* Add the thumbnail gallery block.
* Remove the section with image block.

= 1.7.7 =
* Fixed bug that Japanese translation was not applied in WordPress 5.0
* Support Snow Monkey v5

= 1.7.6 =
* WordPress 5.0 compatible

= 1.7.5 =
* Fix bug that column size of medium window size setting of the panel and items block is not working.
* Add link color setting of the step block.
* Add .wp-image-xxxxx to img.

= 1.7.4 =
* Fixed a bug that Gutenberg toolbar did not become sticky.

= 1.7.3 =
* Improve the usability of UI on Gutenberg.

= 1.7.2 =
* Fix text color of the section with bgimage block.

= 1.7.1 =
* Add the media text block.

= 1.7.0 =
* Add the recent posts block.
* Add the pickup slider block.
* Add triangle divider.

= 1.6.2 =
* Fix ColorPalette bug.
* Fix section-with-image block bug.

= 1.6.1 =
* Add alignwide and alignfull setting to the slider block.

= 1.6.0 =
* Add shape divider settings to the section block.

= 1.5.2 =
* Fix the icon list block bug.
* Support direct file upload and drag and drop upload at MediaPlaceholder on some blocks.

= 1.5.1 =
* Some fixes for the panel block.

= 1.5.0 =
* Add panel block.
* Add sm and md col width setting to the items block.
* Add caption setting to the slider block.

= 1.4.2 =
* Fix that the slick-carousel is not install installed.

= 1.4.1 =
* Fix bug that autoSpeed settings of slider does not work properly.
* Change to prevent image setting by D&D and direct file upload in MediaPlaceholder.
* Refactoring icon list block. The icon renderd with JavaScript.

= 1.4.0 =
* Add slider block
* Add repeatable item add/remove button.

= 1.3.0 =
* Add image field to the pricing table block.
* Add image sizes to the section with image block.

= 1.2.1 =
* Gutenberg 4.2.0 compatible
* Remove section-with-items block

= 1.2.0 =
* Add text highlighter.
* Fix iconlist block bug.

= 1.1.3 =
* Remove styles for Snow Monkey

= 1.1.2 =
* Fix bug that media is not set in repeater blocks.

= 1.1.1 =
* Update readme.txt

= 1.1.0 =
* Add items block.

= 1.0.10 =
* Fixed bug that Snow Monkey accent color is not reflected.
* Changed to run only when Gutenberg is enabled.

= 1.0.9 =
* Change snow-monkey-blocks/section-has-bgimage to snow-monkey-blocks/section-with-bgimage
* Change snow-monkey-blocks/section-has-image to snow-monkey-blocks/section-with-image
* Change snow-monkey-blocks/section-has-items to snow-monkey-blocks/section-with-items

= 1.0.8 =
* Fix about translations.

= 1.0.7 =
* Fixed a bug that balloon block can not be set as avatar image if image size to be uploaded is small.
* Add button size setting of the button box block.
* Add conetnts width setting of section block.

= 1.0.6 =
* Fixed a bug in Gutenberg where alert block text color is not reflected.
* Fixed a bug that layout of testmonial block might collapse on Gutenberg.

= 1.0.5 =
* Update build process.

= 1.0.4 =
* Add filter hook `snow_monkey_blocks_enqueue_fontawesome`
* Add filter hook `snow_monkey_blocks_enqueue_fallback_style`

= 1.0.3 =
* Initial release.

== Upgrade Notice ==

Nothing in particular.

== 3rd party resources ==

= Font Awesome =

WebSite: https://fontawesome.com/
License: https://fontawesome.com/license/free

= slick =

WebSite: http://kenwheeler.github.io/slick/
License: https://github.com/kenwheeler/slick/blob/master/LICENSE

= Photos =
**KENJI HIROTA / Photographer**
- https://hirokenji.com
- voido: https://voido.space
- cooks: https://cooks.jp
- License: CC BY 4.0 https://creativecommons.org/licenses/by/4.0/deed

**visualhunt**
- https://visualhunt.com/photo/1646/people-walking-towards-eiffel-tower-at-night/
- https://visualhunt.com/photo/849/clouds-in-sky-over-fields/
- https://visualhunt.com/photo/525/sunset-over-lake-1/
- https://visualhunt.com/photo/1382/man-sitting-at-table-with-coffee-cup-using-digital-tablet/
- https://visualhunt.com/photo/722/mountain-landscape-and-tree-at-sunset/
- https://visualhunt.com/photo/3306/wave-ocean/
