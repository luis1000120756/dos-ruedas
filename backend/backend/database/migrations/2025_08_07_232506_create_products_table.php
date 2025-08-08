<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->decimal('price')->nullable();
            $table->string('image')->nullable();
            $table->enum('state', ['Disponible', 'No disponible'])->nullable();
            $table->enum('category',['Repuestos de motor', 'Flitros', 'Frenos', 'Espejos', 'Suspensión', 'Escape y silenciadores', 'Carenados y tapas', 'Transmisión'])->nullable();
            $table->integer('quantity')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
