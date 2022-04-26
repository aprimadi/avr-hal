(function() {var implementors = {};
implementors["atmega_hal"] = [{"text":"impl Debug for ReferenceVoltage","synthetic":false,"types":[]},{"text":"impl Debug for AdcSettings","synthetic":false,"types":[]}];
implementors["avr_device"] = [{"text":"impl Debug for Interrupt","synthetic":false,"types":[]},{"text":"impl Debug for AC","synthetic":false,"types":[]},{"text":"impl Debug for ACIS_A","synthetic":false,"types":[]},{"text":"impl Debug for ADC","synthetic":false,"types":[]},{"text":"impl Debug for ADPS_A","synthetic":false,"types":[]},{"text":"impl Debug for ADTS_A","synthetic":false,"types":[]},{"text":"impl Debug for MUX_A","synthetic":false,"types":[]},{"text":"impl Debug for REFS_A","synthetic":false,"types":[]},{"text":"impl Debug for BOOT_LOAD","synthetic":false,"types":[]},{"text":"impl Debug for CPU","synthetic":false,"types":[]},{"text":"impl Debug for CLKPS_A","synthetic":false,"types":[]},{"text":"impl Debug for SM_A","synthetic":false,"types":[]},{"text":"impl Debug for EEPROM","synthetic":false,"types":[]},{"text":"impl Debug for EEPM_A","synthetic":false,"types":[]},{"text":"impl Debug for EXINT","synthetic":false,"types":[]},{"text":"impl Debug for ISC0_A","synthetic":false,"types":[]},{"text":"impl Debug for FUSE","synthetic":false,"types":[]},{"text":"impl Debug for BODLEVEL_A","synthetic":false,"types":[]},{"text":"impl Debug for SUT_CKSEL_A","synthetic":false,"types":[]},{"text":"impl Debug for LOCKBIT","synthetic":false,"types":[]},{"text":"impl Debug for LB_A","synthetic":false,"types":[]},{"text":"impl Debug for PORTB","synthetic":false,"types":[]},{"text":"impl Debug for TC0","synthetic":false,"types":[]},{"text":"impl Debug for WGM0_A","synthetic":false,"types":[]},{"text":"impl Debug for COM0B_A","synthetic":false,"types":[]},{"text":"impl Debug for CS0_A","synthetic":false,"types":[]},{"text":"impl Debug for TC1","synthetic":false,"types":[]},{"text":"impl Debug for DTPS_A","synthetic":false,"types":[]},{"text":"impl Debug for COM1B_A","synthetic":false,"types":[]},{"text":"impl Debug for CS1_A","synthetic":false,"types":[]},{"text":"impl Debug for COM1A_A","synthetic":false,"types":[]},{"text":"impl Debug for USI","synthetic":false,"types":[]},{"text":"impl Debug for USICS_A","synthetic":false,"types":[]},{"text":"impl Debug for USIWM_A","synthetic":false,"types":[]},{"text":"impl Debug for WDT","synthetic":false,"types":[]},{"text":"impl Debug for WDPL_A","synthetic":false,"types":[]}];
implementors["avr_hal_generic"] = [{"text":"impl Debug for MHz24","synthetic":false,"types":[]},{"text":"impl Debug for MHz20","synthetic":false,"types":[]},{"text":"impl Debug for MHz16","synthetic":false,"types":[]},{"text":"impl Debug for MHz12","synthetic":false,"types":[]},{"text":"impl Debug for MHz8","synthetic":false,"types":[]},{"text":"impl Debug for MHz1","synthetic":false,"types":[]},{"text":"impl&lt;SPEED:&nbsp;Debug&gt; Debug for Delay&lt;SPEED&gt;","synthetic":false,"types":[]},{"text":"impl&lt;CLOCK:&nbsp;Debug&gt; Debug for Baudrate&lt;CLOCK&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for Direction","synthetic":false,"types":[]},{"text":"impl Debug for SerialClockRate","synthetic":false,"types":[]},{"text":"impl Debug for DataOrder","synthetic":false,"types":[]},{"text":"impl Debug for ClockDivider","synthetic":false,"types":[]},{"text":"impl Debug for Prescaler","synthetic":false,"types":[]}];
implementors["bare_metal"] = [{"text":"impl&lt;T:&nbsp;Debug&gt; Debug for Peripheral&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'static,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["embedded_hal"] = [{"text":"impl&lt;'a&gt; Debug for Operation&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, W:&nbsp;Debug + 'static&gt; Debug for Operation&lt;'a, W&gt;","synthetic":false,"types":[]},{"text":"impl Debug for StandardId","synthetic":false,"types":[]},{"text":"impl Debug for ExtendedId","synthetic":false,"types":[]},{"text":"impl Debug for Id","synthetic":false,"types":[]},{"text":"impl Debug for ErrorKind","synthetic":false,"types":[]},{"text":"impl Debug for PinState","synthetic":false,"types":[]},{"text":"impl Debug for Direction","synthetic":false,"types":[]}];
implementors["nb"] = [{"text":"impl&lt;E&gt; Debug for Error&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Debug,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Debug for TokenStream","synthetic":false,"types":[]},{"text":"impl Debug for LexError","synthetic":false,"types":[]},{"text":"impl Debug for Span","synthetic":false,"types":[]},{"text":"impl Debug for TokenTree","synthetic":false,"types":[]},{"text":"impl Debug for Delimiter","synthetic":false,"types":[]},{"text":"impl Debug for Group","synthetic":false,"types":[]},{"text":"impl Debug for Spacing","synthetic":false,"types":[]},{"text":"impl Debug for Punct","synthetic":false,"types":[]},{"text":"impl Debug for Ident","synthetic":false,"types":[]},{"text":"impl Debug for Literal","synthetic":false,"types":[]},{"text":"impl Debug for IntoIter","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;'a&gt; Debug for ParseBuffer&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]}];
implementors["void"] = [{"text":"impl Debug for Void","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()