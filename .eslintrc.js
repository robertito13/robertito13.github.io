module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: ['react-app', 'google'],
    rules: {
        'require-jsdoc': 'off',
        'max-len': ['error', 120],
        'object-curly-spacing': ['error', 'always']
    }
}