<?php

use App\Models\Survey;
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
        Schema::create('survey_question', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Survey::class, 'survey_id');
            $table->string('type', 45);
            $table->string('question', 2000);
            $table->longText('description')->nullable();
            $table->longText('data');
            $table->$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('survey_question');
    }
};
