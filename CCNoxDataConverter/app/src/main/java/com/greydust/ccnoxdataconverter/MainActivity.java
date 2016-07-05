package com.greydust.ccnoxdataconverter;

import android.content.Context;
import android.os.AsyncTask;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;



public class MainActivity extends AppCompatActivity {

    private class Startup extends AsyncTask<Void, Void, Void> {
        @Override
        protected Void doInBackground(Void... params) {
            File externalRoot = Environment.getExternalStorageDirectory();
            String outputDataFolder = "/mnt/shared/Other/";
            String outputDataFolderTW = "/mnt/shared/Other/TW/";
            new File("/mnt/shared/Other/TW/").mkdirs();

            {
                List<File> files = GetListFiles(new File(externalRoot.getAbsolutePath() + "/Android/data/com.sega.chainchronicle/files"));
                for (File file : files) {
                    String rawData = ReadFile(file);
                    try {
                        String convertedFileName = outputDataFolder + file.getName();
                        BufferedWriter writer = new BufferedWriter(new FileWriter(convertedFileName));
                        writer.write(rawData);
                        writer.flush();
                        writer.close();
                    } catch (IOException e) {
                    }
                }
            }
            {
                List<File> files = GetListFiles(new File(externalRoot.getAbsolutePath() + "/Android/data/net.gamon.chainchronicleTW/files"));
                for (File file : files) {
                    String rawData = ReadFile(file);
                    try {
                        String convertedFileName = outputDataFolderTW + file.getName();
                        BufferedWriter writer = new BufferedWriter(new FileWriter(convertedFileName));
                        writer.write(rawData);
                        writer.flush();
                        writer.close();
                    } catch (IOException e) {
                    }
                }
            }


            return null;
        }

        protected void onPostExecute(Void result) {
            EditText text = (EditText) findViewById(R.id.editText);
            text.setText("Convert Complete");
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        (new Startup()).execute();
    }

    protected List<File> GetListFiles(File parentDir) {
        ArrayList<File> inFiles = new ArrayList<File>();
        File[] files = parentDir.listFiles();
        for (File file : files) {
            if (file.isDirectory()) {
            } else {
                if(file.getName().endsWith(".raw")){
                    inFiles.add(file);
                }
            }
        }
        return inFiles;
    }

    protected String ReadFile(File file) {
        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            while (line != null) {
                sb.append(line);
                sb.append("\n");
                line = br.readLine();
            }
            return sb.toString();
        } catch (IOException e) {
            return e.getMessage();
        }
    }
}