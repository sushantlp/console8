const config = require('./config');

module.exports = {
    help: [
        'console8: help',

        `\t ${config.COLORS.yellow('args:')}`,
        `\t\t --help\n`,

        `\t\t --rom=<single file rom path> eg: --rom=./wipeoff.rom\n`,

        `\t\t --color=<rendering color of ON bits> (optional, default: white)`,
        `\t\t\t available colors: white, red, green, yellow, blue, magenta, cyan\n`,

        `\t\t --speed=<speed of cycle execution, 1000 / speed> (optional, default: ${config.TIME.speed})\n`,

        `\t\t --rendering_char=<ascii char that represents ON bits> (optional, default: ${config.RENDERING_CHAR})\n`,

        `\t ${config.COLORS.yellow('keys:')}`,

        `\t\t controls:`,
        `\t\t [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ]`,
        `\t\t [ Q ] | [ W ] | [ E ] | [ R ]`,
        `\t\t [ A ] | [ S ] | [ D ] | [ F ]`,
        `\t\t [ Z ] | [ X ] | [ C ] | [ V ]`
    ],

    missing_rom_arg_warning: [
        'console8: missing --rom argument \n',

        `\t ${config.COLORS.yellow('Please specify a correct CHIP8 ROM file path by using --rom argument.')}`,
        `\t\t If you want to see more information you can use the --help argument.`,
        `\t\t ${config.COLORS.green('console8 --help')}`,
        ""
    ],

    speed_arg_warning: [
        'console8: --speed argument value must be an integer\n',

        `\t ${config.COLORS.yellow('Please specify --speed value as an integer.')}`,
        `\t\t If you want to see more information you can use the --help argument.`,
        `\t\t ${config.COLORS.green('console8 --help')}`,
        ""
    ],

    color_arg_warning: [
        'console8: invalid color\n',

        `\t ${config.COLORS.yellow('Please specify a valid and available color name.')}`,
        `\t ${config.COLORS.yellow('Here is the available colors list: white, red, green, yellow, blue, magenta, cyan')}`,
        `\t\t If you want to see more information you can use the --help argument.`,
        `\t\t ${config.COLORS.green('console8 --help')}`,
        ""
    ],

    rom_path_warning: [
        'console8: rom file path warning\n',

        `\t ${config.COLORS.yellow('ROM file couldn\'t found. Please check the file path.')}`,
        `\t\t If you want to see more information you can use the --help argument.`,
        `\t\t ${config.COLORS.green('console8 --help')}`,
        ""
    ],

    prep_state_text: [
        `console8: rom loaded. ${config.COLORS.green('ready.')}\n`,

        `Press ${config.COLORS.green('[ENTER]')} to ${config.COLORS.green('START')} the game.`,
        `When you want to ${config.COLORS.cyan('RESTART')} the emulation use ${config.COLORS.cyan('[CTRL] + [R]')}.`,
        'CHIP8 requires 64x32 display so please adjust your terminal size for appropriate rendering before starting the emulation.\n',
        `\t controls:`,
        `\t [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ]`,
        `\t [ Q ] | [ W ] | [ E ] | [ R ]`,
        `\t [ A ] | [ S ] | [ D ] | [ F ]`,
        `\t [ Z ] | [ X ] | [ C ] | [ V ]`
    ]
}