module.exports = function (config) {
  config.set({
    reporters: ['progress', 'junit'], // Añadir 'junit'

    junitReporter: {                  
      outputDir: 'test-results/unit', 
      outputFile: 'TESTS-unit.xml',   
      useBrowserName: false
    },
    // ... otros ajustes
  });
};
