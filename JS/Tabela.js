$(document).ready(function() {
    $.ajax({
        url: 'JSON/KremCorba.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-KremCorba tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/ParadajzCorba.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-ParadajzCorba tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/CorbaOdPecuraka.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-CorbaOdPecuraka tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/PunjenePaprike.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-PunjenePaprike tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/Musaka.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-Musaka tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/Cufte.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-Cufte tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/PitaOdJabuka.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-PitaOdJabuka tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/StrudlaSaMakom.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-StrudlaSaMakom tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });

$(document).ready(function() {
    $.ajax({
        url: 'JSON/TortaOdJagoda.json',
        dataType: 'json',
        success: function(data) {
  
            var tableBody = $('#tabelaSastojaka-TortaOdJagoda tbody');
  
            $.each(data, function(key, value) {
                var row = $('<tr>');
                $('<td>').text(value.sastojci).appendTo(row);
                $('<td>').text(value.kolicina).appendTo(row);
                row.appendTo(tableBody);
            });
        }
    });
  });